/** @format */

import React, { useState } from 'react'

import { Button } from '@material-ui/core'

import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext/CartContextProvider'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item }) => {
  const [product] = item
  const { pictureUrl, title, description, price, stock } = product

  const [actStock, setActStock] = useState(1)
  const [items, setItems] = useState(null)
  const { addItem } = useCartContext()
  const handlerCount = (actStock) => {
    setActStock(actStock)
  }
  const addCart = () => {
    setItems(actStock)
    alert(
      `Se agregaron ${actStock} unidades al carrito. Para comfirmar la compra haga click en el boton Finalizar`
    )
  }
  const checkOut = () => {
    addItem(product, actStock)
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
          <Link to="/cart">
            <Button
              variant="outlined"
              style={{ marginTop: '2%' }}
              color={'secondary'}
              onClick={checkOut}
            >
              Finalizar compra
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ItemDetail
