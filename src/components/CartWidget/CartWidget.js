/** @format */

import React from 'react'
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined'

import { Badge } from '@material-ui/core'

import { useCartContext } from '../../context/CartContext/CartContextProvider'

function CartWidget({ style }) {
  const { length } = useCartContext()

  return (
    <>
      {length > 0 && (
        <>
          <Badge badgeContent={length} color="secondary">
            <AddShoppingCartOutlinedIcon style={style} />
          </Badge>
        </>
      )}
    </>
  )
}

export default CartWidget
