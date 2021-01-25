/** @format */

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import PRODUCTS from '../../data/products.json'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTS), 2000)
  })
}

const ItemDetailContainer = () => {
  const { id } = useParams()

  const parsedId = parseInt(id)
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    getItem().then((data) => {
      const filteredProduct = data.find((item) => item.id === parsedId)
      if (!filteredProduct) {
        setError(true)
        setProducts(null)
      } else {
        setProducts(filteredProduct)
      }
    })
  }, [parsedId])

  return (
    <div>
      {error && (
        <div className="div-notFound-product">
          <h1>PRODUCT NOT FOUND</h1>{' '}
        </div>
      )}
      {!products && !error && (
        <div className="div-item-loading">
          <p>Loading</p>
          <CircularProgress />
        </div>
      )}
      {products && (
        <div className="div-item-container">
          <ItemDetail item={products} />
        </div>
      )}
    </div>
  )
}

export default ItemDetailContainer
