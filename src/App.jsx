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

const generalinformationvalues = {
  name: "",
  phone: "",
  password: "",
  email: ""
}

function GeneralInformation(){
  const [information, setInformation] = useState(generalinformationvalues);

  const generalInformationSubmit = (e) =>{
    setInformation()
  }
  
  return(
    <>
      <h1>Congratulations, you've just stepped foot into an awesome way of getting a job!</h1>
      <h2>First of all, please put on some general information (it will take a few seconds):</h2>
      
      <form action="post" onSubmit={generalInformationSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" name='name' placeholder='Your name here'/><br/>

        <label htmlFor="email">Enter an email:</label>
        <input type="email" name='email' placeholder='Your email here'/><br/>

        <label htmlFor="password">Enter a new password:</label>
        <input type="password" name='password' placeholder='Your new password here'/><br/>

        <button type='submit'>Submit Information</button>
      </form>
    </>
  )
}

function App() {
  return (
    <>
      <Header/>
      <GeneralInformation/>
    </>
  )
}

export default App
