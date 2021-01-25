/** @format */

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import NotFound from './Errors/NotFound/NotFound'

function App() {
  return (
    <div className="App">
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
            <ItemListContainer
              message="Bienvenido a la tienda"
              initial={1}
              stock={5}
            ></ItemListContainer>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
