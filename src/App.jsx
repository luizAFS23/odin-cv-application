import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(){
  return(
    <div className='header'>
      <h2 className='footer-logo'>CV Application</h2>
      <div className='links'>
        <a href="">About me</a>
        <a href="">More</a>
      </div>
    </div>
  )
}


function App() {
  return (
    <>
      <Header/>
    </>
  )
}

export default App
