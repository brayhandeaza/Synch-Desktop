import React from 'react'
import './css/App.scss'

// Components
import Home from './views/Home'
import Menu from './components/Menu'


function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
    </div>
  )
}

export default App
