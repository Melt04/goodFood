/** @format */

import React, { useState, createContext, useContext } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if (cart.length === 0) {
      setCart([{ item, quantity }])
      return
    }
    const { id } = item
    const itemId = findId(id)
    if (itemId === -1) {
      setCart((prevState) => [...prevState, { item, quantity }])
    } else {
      const newCart = cart
      newCart[itemId].quantity += quantity
      setCart(newCart)
    }
  }
  const findId = (id) => {
    return cart.findIndex(({ item }) => item.id === id)
  }
  const removeItem = (id) => {
    const newCart = cart.filter(({ item }) => item.id !== id)
    console.log(newCart)
    setCart(newCart)
  }
  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{ addItem, cart, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
