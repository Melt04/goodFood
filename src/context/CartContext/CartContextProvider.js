/** @format */

import React, { useState, createContext, useContext } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [length, setLength] = useState(0)

  const addItem = (item, quantity) => {
    setLength(length + quantity)
    setTotalPrice((prevState) => prevState + item.price * quantity)
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
    console.log(id)
    setCart((prev) => prev.filter(({ item }) => item.id !== id))
    const { item, quantity } = cart.find(({ item }) => item.id === id)
    setTotalPrice((prevState) => prevState - item.price * quantity)

    setLength((prev) => prev - quantity)
  }
  const clearCart = () => {
    setCart([])
    setTotalPrice(0)
    setLength(0)
  }
  return (
    <CartContext.Provider
      value={{ addItem, cart, clearCart, removeItem, totalPrice, length }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
