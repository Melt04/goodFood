/** @format */

import React from 'react'

import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext/CartContextProvider'

function Cart() {
  const { cart, removeItem, clearCart, totalPrice, length } = useCartContext()
  console.log(cart.length)
  return (
    <div>
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
          <h1>Items</h1>
          {cart.map(({ item, quantity }) => {
            return (
              <p>
                {item.title} Cantidad: {quantity} Categoria:{item.category}
                <button onClick={() => removeItem(item.id)}>Quitar</button>
              </p>
            )
          })}
          {cart.length > 0 && <p>Total Price:{totalPrice} </p>}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart
