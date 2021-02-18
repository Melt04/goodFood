/** @format */

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import { useFetchFirebase } from '../../hooks'
import { getFirestore } from '../../firebase'

import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

/*
 */

const ItemDetailContainer = () => {
  const { id } = useParams()

  const [query, setQuery] = useState(null)

  const { error, doc } = useFetchFirebase(query)
  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection('items')
    const queryFirebase = itemCollection.where('id', '==', id).get()
    setQuery(queryFirebase)
  }, [id])

  return (
    <div>
      {doc.length === 0 && !error && (
        <div className="div-item-loading">
          <p>Loading</p>
          <CircularProgress />
        </div>
      )}

      {error && (
        <div className="div-notFound-product">
          <h1>PRODUCT NOT FOUND</h1>{' '}
        </div>
      )}

      {doc?.length > 0 && <ItemDetail item={doc} />}
    </div>
  )
}

export default ItemDetailContainer
