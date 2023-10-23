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
      <h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child"/>
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult"/>
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior"/>
  <label for="senior">Senior</label>
</div>
    </>
  )
}

export default App
