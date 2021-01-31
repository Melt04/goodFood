/** @format */

import React, { useState } from 'react'

import { Button } from '@material-ui/core'

import { useHistory } from 'react-router-dom'

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item }) => {
  const { pictureUrl, title, description, price, stock } = item
  const [actStock, setActStock] = useState(1)
  const [items, setItems] = useState(null)
  const history = useHistory()
  const handlerCount = (actStock) => {
    setActStock(actStock)
  }
  const addCart = () => {
    setItems(actStock)
    alert(`Se agregaron ${actStock} unidades`)
  }
  const checkOut = () => {
    history.push('/cart')
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
      {items === null ? (
        <ItemCount
          initial={1}
          max={stock}
          onAdd={handlerCount}
          addCart={addCart}
        ></ItemCount>
      ) : (
        <div>
          {' '}
          <Button
            variant="outlined"
            style={{ marginTop: '2%' }}
            color={'secondary'}
            onClick={checkOut}
          >
            Finalizar compra
          </Button>{' '}
        </div>
      )}
    </div>
  )
}

export default ItemDetail
