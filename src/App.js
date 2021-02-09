/** @format */

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import NotFound from './Errors/NotFound/NotFound'
import CartContextProvider from './context/CartContext/CartContextProvider'
import CartContainer from './containers/CartContainer/CartContainer.js'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer
                message="Bienvenido a la tienda"
                initial={1}
                stock={5}
              ></ItemListContainer>
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer message="Bienvenido a la tienda"></ItemListContainer>
            </Route>
            <Route exact path="/cart">
              <CartContainer />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
