/** @format */

import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import ItemCount from '../../components/itemCount/itemCount'
import './ItemListContainer.css'

function ItemListContainer({ message, initial, stock }) {
  const [cont, setCont] = useState(initial)

  const add = () => {
    if (cont >= stock) {
      alert('Se supero el Stock')
    } else setCont((prevState) => prevState + 1)
  }
  const addCart = () => {
    alert(`Se agregaron ${cont} unidades`)
  }
  const sub = () => {
    if (cont > 1) {
      setCont((prevState) => prevState - 1)
    } else alert('No hay articulos para restar')
  }
  return (
    <React.Fragment>
      <div className="container-div-item">
        <Typography variant="h3">{message}</Typography>
        <div className="counter-item">
          <ItemCount
            initial={cont}
            add={add}
            sub={sub}
            addCart={addCart}
            articulo="Sumplemento dietetico"
          ></ItemCount>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ItemListContainer
