/** @format */

import React from 'react'
import Item from '../Item/Item'
import Grid from '@material-ui/core/Grid'
import './ItemList.css'
const ItemList = ({ items }) => {
  console.log(items)

  return (
    <div className="container-itemlist">
      <Grid container spacing={2} justify="center">
        {items.map((item) => (
          <Grid item md={4} xs={'12'} sm={'6'}>
            <Item key={item.id} item={item}></Item>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ItemList
