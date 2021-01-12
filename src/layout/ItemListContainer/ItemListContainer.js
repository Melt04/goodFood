/** @format */

import React from 'react'
import { Typography } from '@material-ui/core'
import './ItemListContainer.css'

function ItemListContainer({ message, children }) {
  return (
    <React.Fragment>
      <div className="container-div-item">
        <Typography variant="h3">{message}</Typography>
        <div className="counter-item">{children}</div>
      </div>
    </React.Fragment>
  )
}

export default ItemListContainer
