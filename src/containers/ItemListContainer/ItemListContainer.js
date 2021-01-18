/** @format */

import React, { useState, useEffect } from 'react'

import { Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

import ItemCount from '../../components/itemCount/itemCount'
import ItemList from '../ItemList/ItemList'

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

  const add = () => {
    if (cont >= stock) {
      alert('Se supero el Stock')
    } else setCont((prevState) => prevState + 1)
  }
  const addCart = () => {
    alert(`Se agregaron ${cont} unidades`)
  }
  const sub = () => {
    if (cont > 1) {
      setCont((prevState) => prevState - 1)
    } else alert('No hay articulos para restar')
  }
  return (
    <React.Fragment>
      <div className="container-div-item">
        <Typography variant="h3">{message}</Typography>
        <div className="counter-item">
          <ItemCount
            initial={cont}
            add={add}
            sub={sub}
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
