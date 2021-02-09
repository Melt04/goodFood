/** @format */

import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
function ChekoutForm({ checkout }) {
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const onChangeHandler = (key, value) => {
    setBuyerInfo({ ...buyerInfo, [key]: value })
  }
  return (
    <div>
      <form onSubmit={(e) => checkout(e, buyerInfo)} className="checkout-form">
        <TextField
          variant="outlined"
          label="Name"
          name="name"
          required
          value={buyerInfo['name']}
          onChange={({ target }) => onChangeHandler(target.name, target.value)}
        />
        <TextField
          variant="outlined"
          label="Phone"
          name="phone"
          required
          value={buyerInfo['phone']}
          onChange={({ target }) => onChangeHandler(target.name, target.value)}
        />
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          required
          type="email"
          value={buyerInfo['email']}
          onChange={({ target }) => onChangeHandler(target.name, target.value)}
        />
        <button>Checkout</button>
      </form>
    </div>
  )
}
export default ChekoutForm
