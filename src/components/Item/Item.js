/** @format */

import React from 'react'

import './Item.css'

const Item = ({ item }) => {
  const { title, description, price, pictureUrl } = item
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
    </div>
  )
}
//id, title,description,price,pictureUrl
export default Item
