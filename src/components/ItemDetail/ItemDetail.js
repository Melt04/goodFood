/** @format */

import React from 'react'

const ItemDetail = ({ item }) => {
  const { pictureUrl, title, description, price } = item
  return (
    <div>
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
    </div>
  )
}

export default ItemDetail
