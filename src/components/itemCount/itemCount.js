/** @format */

import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone'
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone'
import './ItemCount.css'

const ItemCount = ({ stock, initial, articulo }) => {
  const [actStock, setActStock] = useState(initial)
  const INC = 'INCREMENT'
  const DEC = 'DECREMENT'
  const addCart = () => {
    alert(`${articulo} agregado al carrito x ${actStock}`)
  }
  const changeStock = (op) => {
    if (op === INC) {
      if (actStock < stock) {
        setActStock((prevState) => prevState + 1)
      } else {
        alert('No hay mas stock')
      }
    } else {
      if (actStock > 1) {
        setActStock((prevState) => prevState - 1)
      } else {
        alert('Cantidad en 1')
      }
    }
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} spacing={3}>
          <p>{articulo}</p>
        </Grid>
      </Grid>
      <Grid
        className="container-grid-stock"
        container
        spacing={1}
        justify="center"
        alignContent="center"
      >
        <Grid item xs={4}>
          <IndeterminateCheckBoxTwoToneIcon
            style={{ fontSize: '40px', color: 'red' }}
            onClick={() => changeStock(DEC)}
          ></IndeterminateCheckBoxTwoToneIcon>
        </Grid>
        <Grid item xs={4}>
          <p>{actStock}</p>
        </Grid>
        <Grid item xs={4}>
          <AddBoxTwoToneIcon
            onClick={() => changeStock(INC)}
            style={{ fontSize: '40px', color: 'green' }}
          />
        </Grid>
      </Grid>

      <Grid container justify="center" className="container-grid-button">
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={addCart}>
            Agregar al carrito
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default ItemCount
