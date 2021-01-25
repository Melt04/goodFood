/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'

const Item = ({ item }) => {
  const { id, title, description, price, pictureUrl } = item
  return (
    <div className="item-container">
      <Link to={`/item/${id}`}>
        {' '}
        <p>{title}</p>
      </Link>
      <img
        src={pictureUrl}
        alt="Foto del articulo"
        style={{ width: '40%', height: '30%' }}
      ></img>
    </div>
  )
}
//id, title,description,price,pictureUrl
export default Item
