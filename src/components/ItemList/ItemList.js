/** @format */

import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
const ItemList = ({ items }) => {
  return (
    <div className="container-itemlist">
      {items.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  )
}

export default ItemList
