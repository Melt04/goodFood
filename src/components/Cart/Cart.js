/** @format */

import { DataGrid } from '@material-ui/data-grid'

import React, { useState, useEffect } from 'react'

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 300,
    disableClickEventBubbling: true,
  },
  {
    field: 'title',
    headerName: 'Titulo',
    width: 400,
    disableClickEventBubbling: true,
  },
  {
    field: 'category',
    headerName: 'Categoria',
    width: 400,
    disableClickEventBubbling: true,
  },
  {
    field: 'quantity',
    headerName: 'Cantidad',
    width: 130,
    disableClickEventBubbling: true,
  },
]

function Cart({ items, remove, total, clear }) {
  const [rows, SetRows] = useState([])
  const [itemRemove, setItemRemove] = useState([])
  useEffect(() => {
    let row = []
    items.forEach(({ item, quantity }) => {
      const { title, category, id } = item
      row.push({
        id,
        title,
        category,
        quantity,
      })
    })
    SetRows(row)
  }, [items])
  const removeItems = () => {
    itemRemove.forEach((id) => {
      remove(id)
    })
    setItemRemove([])
  }
  return (
    <>
      {
        <div>
          <h1>Items</h1>

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={4}
              checkboxSelection
              height={'500px'}
              onSelectionModelChange={({ selectionModel }) =>
                setItemRemove(selectionModel)
              }
            />
          </div>
          {items.length > 0 && <p>Total Price:{total} </p>}
          {itemRemove.length > 0 && (
            <button onClick={removeItems}>Quitar</button>
          )}
          <button onClick={clear}>Clear Cart</button>
        </div>
      }
    </>
  )
}

export default Cart
