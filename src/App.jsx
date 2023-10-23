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

function Main(){
  return(
    <>
      <h1>Congratulations, you've just stepped foot into an awesome way of getting a job!</h1>
      <h2>First of all, please put on your information here (it will take a few seconds):</h2>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' placeholder='Your name here'/>
        <label htmlFor="">Age:</label>
        
        <button type='submit'>Submit Information</button>
      </form>
    </>
  )
}

function App() {
  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
