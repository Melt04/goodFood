/** @format */

import React from 'react'
import logo from '../../assets/logo.jpeg'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar className="navbar-main">
          <div>
            <img src={logo} alt="logo" className="img-logo"></img>
          </div>
          <div>
            <ul className="list-menu">
              <li>
                {' '}
                <a href="/"> Productos Locales</a>
              </li>
              <li>
                <a href="/"> Productos Importados</a>
              </li>
              <li>
                {' '}
                <a href="/"> Suplementos</a>
              </li>
            </ul>
          </div>
          <div>
            <Button>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
