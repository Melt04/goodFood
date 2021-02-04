/** @format */

import React, { createRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.jpeg'
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@material-ui/core'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

import { getFirestore } from '../../firebase'

import { useFetchFirebase } from '../../hooks'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [query, setQuery] = useState(null)
  const { doc, loading } = useFetchFirebase(query)

  useEffect(() => {
    const db = getFirestore()
    const categoryCollection = db.collection('category')
    const queryFirebase = categoryCollection.get()
    setQuery(queryFirebase)
  }, [])
  const handleClick = () => {
    setAnchorEl(ref.current)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const ref = createRef()
  console.log(ref)

  return (
    <>
      <AppBar>
        <Toolbar className="navbar-main">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="img-logo"></img>
            </Link>
          </div>
          <div className="navbar-menu">
            <div>
              <Button
                ref={ref}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Categorias
                <ArrowDropDownOutlinedIcon />
              </Button>

              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                color="primary"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                style={{ width: '100%' }}
              >
                {loading ? (
                  <MenuItem onClick={handleClose} component={Link}>
                    loading...
                  </MenuItem>
                ) : (
                  doc?.map(({ name }) => {
                    return (
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to={`/category/${name}`}
                      >
                        {name}
                      </MenuItem>
                    )
                  })
                )}
              </Menu>
            </div>

            <div>
              <Link to="/cart">
                <CartWidget />
              </Link>
              <Button> Login</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
