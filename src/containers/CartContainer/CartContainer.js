/** @format */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Cart from '../../components/Cart/Cart'
import './CartContainer.css'
import { useCartContext } from '../../context/CartContext/CartContextProvider'
import CheckoutForm from '../../components/CheckoutForm/ChekoutForm'
import { getFirestore, Firebase } from '../../firebase'

import firebase from 'firebase/app'
import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { formatItem } from '../../utils'

function CartContainer() {
  const { cart, removeItem, clearCart, totalPrice, length } = useCartContext()
  const [fetching, setFetching] = useState(false)
  const [loading, setLoading] = useState(false)
  const [docId, setDocId] = useState(null)
  const [outOfStock, setoutOfStock] = useState([])
  const db = getFirestore()
  const checkOut = async (e, buyer) => {
    e.preventDefault()
    const items = formatItem(cart)
    setLoading(true)
    setFetching('pending')
    const itemsToUpdate = db.collection('items').where(
      firebase.firestore.FieldPath.documentId(),
      'in',
      items.map((item) => item.id)
    )
    const queryItemsToUpdate = await itemsToUpdate.get()
    const outOfStock = []
    const batch = db.batch()
    queryItemsToUpdate.docs.forEach((snapShot, idx) => {
      if (snapShot.data().stock >= items[idx].quantity) {
        batch.update(snapShot.ref, {
          stock: snapShot.data().stock - items[idx].quantity,
        })
      } else {
        outOfStock.push({ ...snapShot.data() })
      }
    })
    if (outOfStock.length === 0) {
      const collection = db.collection('orders').doc()
      batch.set(collection, {
        buyer,
        items,
        total: totalPrice,
        date: Firebase.firestore.Timestamp.fromDate(new Date()),
      })
      await batch.commit()
      setDocId(collection.id)
      setLoading(false)
      setFetching('success')
      clearCart()
    } else {
      setLoading(false)
      setFetching('error')
      setoutOfStock(outOfStock)
    }
  }

  return (
    <>
      <h1>Bienvenido a cart</h1>
      {length === 0 ? (
        <>
          <h1>El carrito esta vacio</h1>
          <Link to="/">
            <Button
              variant="outlined"
              style={{ marginTop: '2%' }}
              color={'secondary'}
            >
              Ir al Home
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Cart
            items={cart}
            clear={clearCart}
            total={totalPrice}
            remove={removeItem}
          />
          {!loading && <CheckoutForm checkout={checkOut} />}
        </>
      )}

      {loading && <CircularProgress />}
      {!loading && fetching === 'success' && (
        <>
          {' '}
          <h1>Compra exitosa</h1>
          <p>Tu id de compra es {docId} </p>
        </>
      )}
      {!loading && fetching === 'error' && (
        <>
          {' '}
          <h1>Se ha producido un error en la compra</h1>
          <h3>Los siguientes items estan sin stock :</h3>
          {outOfStock.map((item) => (
            <p>{item.title}</p>
          ))}
        </>
      )}
    </>
  )
}

export default CartContainer
