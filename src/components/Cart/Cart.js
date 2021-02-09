/** @format */

import React from 'react'
function Cart({ items, remove, total, clear }) {
  return (
    <div>
      <h1>Items</h1>
      {items.map(({ item, quantity }) => {
        return (
          <p>
            {item.title} Cantidad: {quantity} Categoria:{item.category}
            <button onClick={() => remove(item.id)}>Quitar</button>
          </p>
        )
      })}
      {items.length > 0 && <p>Total Price:{total} </p>}
      <button onClick={clear}>Clear Cart</button>
    </div>
  )
}

export default Cart
