/** @format */

import React from 'react'

import { useCartContext } from '../../context/CartContext/CartContextProvider'

function Cart() {
  const { cart, removeItem, clearCart } = useCartContext()

  return (
    <div>
      <h1>Bienvenido a cart</h1>
      <h1>Items</h1>
      {cart.map(({ item, quantity }) => {
        return (
          <p>
            {item.title} Cantidad: {quantity} Categoria:{item.category}
            <button onClick={() => removeItem(item.id)}>Quitar</button>
          </p>
        )
      })}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart
