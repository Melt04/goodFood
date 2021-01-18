/** @format */

import React, { useState, useEffect } from 'react'

import { Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

import ItemCount from '../../components/itemCount/itemCount'
import ItemList from '../../components/ItemList/ItemList'

import './ItemListContainer.css'

import PRODUCTS from '../../data/products.json'

function ItemListContainer({ message, initial, stock }) {
  const [cont, setCont] = useState(initial)
  const [prod, setProd] = useState([])

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => resolve(PRODUCTS), 3000)
    })
    getProducts.then((data) => setProd(data))
  }, [])
  const handlerCount = (actStock) => {
    if (actStock > 0 && actStock <= stock) {
      setCont(actStock)
    } else {
      alert('No se puede modificar el stock')
    }
  }

  const addCart = () => {
    alert(`Se agregaron ${cont} unidades`)
  }
  return (
    <React.Fragment>
      <div className="container-div-item">
        <Typography variant="h3">{message}</Typography>
        <div className="counter-item">
          <ItemCount
            initial={cont}
            onAdd={handlerCount}
            addCart={addCart}
            articulo="Sumplemento dietetico"
          ></ItemCount>
        </div>
        {prod.length > 0 ? (
          <ItemList items={prod}></ItemList>
        ) : (
          <div>
            <p>Loading</p>
            <CircularProgress />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default ItemListContainer
