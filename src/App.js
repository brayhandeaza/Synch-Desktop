import React from 'react'
import './css/App.scss'

// Components
import Home from './Views/Home'
import Menu from './Componets/Menu'


function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
    </div>
  )
}

export default App
