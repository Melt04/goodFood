/** @format */

import React, { useState } from 'react'

import { Button, Grid } from '@material-ui/core'
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone'
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone'
import './ItemCount.css'

const ItemCount = ({ initial, max, onAdd, addCart }) => {
  const [stock, setStock] = useState(initial)
  const add = () => {
    if (stock < max) {
      let increment = stock + 1
      setStock(increment)
      onAdd(increment)
    }
  }
  const sub = () => {
    if (stock > 1) {
      let decrement = stock - 1
      setStock(decrement)
      onAdd(decrement)
    }
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
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
            onClick={() => sub()}
          ></IndeterminateCheckBoxTwoToneIcon>
        </Grid>
        <Grid item xs={4}>
          <p>{stock}</p>
        </Grid>
        <Grid item xs={4}>
          <AddBoxTwoToneIcon
            onClick={() => add()}
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
