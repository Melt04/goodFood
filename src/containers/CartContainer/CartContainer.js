/** @format */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Cart from '../../components/Cart/Cart'
import './CartContainer.css'
import { useCartContext } from '../../context/CartContext/CartContextProvider'
import CheckoutForm from '../../components/CheckoutForm/ChekoutForm'
import { getFirestore, Firebase } from '../../firebase'

import { Button } from '@material-ui/core'

function CartContainer() {
  const { cart, removeItem, clearCart, totalPrice, length } = useCartContext()
  const db = getFirestore()
  const checkOut = (e, buyer) => {
    e.preventDefault()
    const collection = db.collection('orders')
    collection
      .add({
        buyer,
        items: cart,
        total: totalPrice,
        date: Firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then((data) => console.log(data.id))
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
          <CheckoutForm checkout={checkOut} />
        </>
      )}
    </>
  )
}

export default CartContainer

/* {
    buyer:{
        name,
        phone,
        email
    },
    date,
    total
    } */
