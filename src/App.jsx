import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <header>
        <div className='header-logo'>
          <h1>GTS</h1>
          <span>Pocket</span>
        </div>
        <div className="rainbow-divider"></div>
      </header>
      <main>
        <div className="main-buttons">
          <button className='base-styling'>Propose Trade</button>
          <button className='base-styling'>Search Trades</button>
          <button className='base-styling'>Login/Sign Up</button>
        </div>
      </main>
    </>

  )
}

export default App
