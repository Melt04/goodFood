/** @format */

import './App.css'

import Navbar from './layout/Navbar/Navbar'
import ItemCount from './components/itemCount/itemCount'
import ItemListContainer from './layout/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer message="Bienvenido a la tienda">
        <ItemCount
          initial={1}
          stock={5}
          articulo="Sumplemento dietetico"
        ></ItemCount>
      </ItemListContainer>
    </div>
  )
}

export default App
