/** @format */

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'

import ItemList from '../../components/ItemList/ItemList'
import { getFirestore } from '../../firebase'

import { useFetchFirebase } from '../../hooks'

import './ItemListContainer.css'

function ItemListContainer() {
  const { categoryId } = useParams()
  const [query, setQuery] = useState(null)
  const { doc, error } = useFetchFirebase(query)
  console.log(categoryId)
  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection('items')
    let queryFirebase
    if (categoryId) {
      queryFirebase = itemCollection.where('category', '==', categoryId).get()
    } else {
      queryFirebase = itemCollection.get()
    }
    setQuery(queryFirebase)
  }, [categoryId])
  return (
    <React.Fragment>
      {error && (
        <div className="div-notFound-category">
          <h1>CATEGORY NOT FOUND</h1>
        </div>
      )}
      {doc?.length > 0 && <ItemList items={doc}></ItemList>}
      {doc.length === 0 && !error && (
        <div>
          <p>Loading</p>
          <CircularProgress />
        </div>
      )}
    </React.Fragment>
  )
}

export default ItemListContainer

////
