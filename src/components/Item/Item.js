/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

import './Item.css'
const Item = ({ item }) => {
  const { id, title, pictureUrl } = item
  return (
    <Card className="item-container">
      <CardContent className="card-content">
        <Link to={`/item/${id}`}>
          <p>{title}</p>
        </Link>

        <CardMedia
          className="img-cart"
          image={pictureUrl}
          title="Contemplative Reptile"
        />
        {/* <img src={pictureUrl} /> */}
      </CardContent>
    </Card>
  )
}

export default Item
