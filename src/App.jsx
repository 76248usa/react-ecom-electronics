import React from 'react'
import Routing from './components/routing/Routing'

import Navbar from './components/navbar/Navbar'
import './App.css'

function App() {
  
  return (
    <div className="app">
      <Navbar></Navbar>
      <main>
      <Routing />
      </main>
    </div>
  )
}

export default App