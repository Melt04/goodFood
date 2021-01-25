/** @format */

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'

//import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'

import './ItemListContainer.css'

import PRODUCTS from '../../data/products.json'

function ItemListContainer({ message, initial, stock }) {
  const [prod, setProd] = useState([])
  const { categoryId } = useParams()
  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => resolve(PRODUCTS), 3000)
    })
    getProducts.then((data) => {
      if (!categoryId) {
        setProd(data)
      } else {
        const filteredProduct = data.filter(
          (product) => product.category === categoryId
        )
        setProd(filteredProduct)
      }
    })
    return () => {
      setProd([])
    }
  }, [categoryId])

  return (
    <React.Fragment>
      <div className="container-div-item">
        {/*  <div className="counter-item">
          <ItemCount
            initial={cont}
            max={stock}
            onAdd={handlerCount}
            addCart={addCart}
            articulo="Sumplemento dietetico"
          ></ItemCount>
        </div> */}
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
