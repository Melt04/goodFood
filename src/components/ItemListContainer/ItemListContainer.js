/** @format */

import React from 'react'
import { Typography } from '@material-ui/core'
import './ItemListContainer.css'

function ItemListContainer({ message }) {
  return (
    <div className="container-div-item">
      <Typography variant="h3">{message}</Typography>
    </div>
  )
}

export default ItemListContainer
