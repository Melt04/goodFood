/** @format */

import './App.css'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        message="Bienvenido a la tienda"
        initial={1}
        stock={5}
      ></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  )
}

export default App
