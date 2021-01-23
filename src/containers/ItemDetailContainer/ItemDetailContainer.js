/** @format */

import React, { useEffect, useState } from 'react'
import PRODUCTS from '../../data/products.json'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTS), 2000)
  })
}

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    getItem().then(([data]) => setProducts(data))
  }, [])

  return (
    <div>
      ItemDetailContainer
      {products && <ItemDetail item={products} />}
    </div>
  )
}

export default ItemDetailContainer
