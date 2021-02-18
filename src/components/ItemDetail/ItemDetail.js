/** @format */

import React, { useState } from 'react'

import { Button, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext/CartContextProvider'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Card from '@material-ui/core/Card'
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
    <div className="item-detail-container">
      <Card raised className="item-detail-card">
        <CardContent className="item-card-content">
          <p>{title}</p>
          <CardMedia
            image={pictureUrl}
            style={{ width: '300px', height: '300px' }}
          />

          <p>{price}</p>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            value={description}
            readOnly={true}
            style={{ resize: 'none' }}
          />
          {stock < 1 ? (
            <Link to="/">
              <p className="no-stock">No hay stock</p>
              <Button
                variant="outlined"
                style={{ marginTop: '2%' }}
                color={'secondary'}
              >
                Volver al home{' '}
              </Button>
            </Link>
          ) : items === null ? (
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
        </CardContent>
      </Card>
    </div>
  )
}

export default ItemDetail
