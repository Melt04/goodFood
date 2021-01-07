/** @format */

import './App.css'
import Navbar from '../src/components/Navbar/Navbar'

import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer message="Bienvenido a la tienda" />
    </div>
  )
}

export default App
