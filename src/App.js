/** @format */

import './App.css'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        message="Bienvenido a la tienda"
        initial={1}
        stock={5}
      ></ItemListContainer>
    </div>
  )
}

export default App
