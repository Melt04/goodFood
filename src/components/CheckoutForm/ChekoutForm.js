/** @format */

import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import './CheckoutForm.css'
function ChekoutForm({ checkout }) {
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const { name, email, phone } = buyerInfo
  const onChangeHandler = (key, value) => {
    setBuyerInfo({ ...buyerInfo, [key]: value })
  }
  return (
    <div className="checkout-form">
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
          type={'number'}
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
        <Button
          type="submit"
          variant={'contained'}
          disabled={!(phone && email && name)}
        >
          Checkout
        </Button>
      </form>
    </div>
  )
}
export default ChekoutForm
