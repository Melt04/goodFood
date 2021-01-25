/** @format */

import React, { useState } from 'react'

import './ItemDetail.css'

import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item }) => {
  const { pictureUrl, title, description, price, stock } = item
  const [actStock, setActStock] = useState(1)
  const handlerCount = (actStock) => {
    setActStock(actStock)
  }
  const addCart = () => {
    alert(`Se agregaron ${actStock} unidades`)
  }
  return (
    <div className="item-container">
      <p>{title}</p>
      <img
        src={pictureUrl}
        alt="Foto del articulo"
        style={{ width: '40%', height: '30%' }}
      ></img>
      <p>{price}</p>
      <textarea
        value={description}
        readOnly={true}
        style={{ resize: 'none' }}
      ></textarea>
      <ItemCount
        initial={1}
        max={stock}
        onAdd={handlerCount}
        addCart={addCart}
      ></ItemCount>
    </div>
  )
}

export default ItemDetail
