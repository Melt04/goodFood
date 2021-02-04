/** @format */

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import { useFetchFirebase } from '../../hooks'
import { getFirestore } from '../../firebase'

//import PRODUCTS from '../../data/products.json'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

/* 
const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTS), 2000)
  })
} */

const ItemDetailContainer = () => {
  const { id } = useParams()
  const parseId = parseInt(id)

  const [query, setQuery] = useState(null)
  // const [products, setProducts] = useState(null)
  //const [error, setError] = useState(false)
  const { error, doc } = useFetchFirebase(query)
  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection('items')
    const queryFirebase = itemCollection.where('id', '==', parseId).get()
    setQuery(queryFirebase)
  }, [parseId])

  return (
    <div>
      {error && (
        <div className="div-notFound-product">
          <h1>PRODUCT NOT FOUND</h1>{' '}
        </div>
      )}
      {doc.length === 0 && !error && (
        <div className="div-item-loading">
          <p>Loading</p>
          <CircularProgress />
        </div>
      )}
      {doc?.length > 0 && (
        <div className="div-item-container">
          <ItemDetail item={doc} />
        </div>
      )}
    </div>
  )
}

export default ItemDetailContainer
