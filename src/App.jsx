import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'

const generalinformationvalues = {
  name: "",
  phone: "",
  password: "",
  email: ""
}

function GeneralInformationForm(){
  const [name, setName] = useState(null);

  if (name == null) {
    return <NameTaker onSubmit={submitHandler} />
  }

  function submitHandler(e) {
    setName(e.value)
  }
  
  return(
    <>
      <h1>Congratulations, you've just stepped foot into an awesome way of getting a job!</h1>
      <h2>First of all, please put on some general information (it will take a few seconds):</h2>
      
      <form action="post">
        <label htmlFor="name">Enter your name:</label>
        <input type="text" name='name' placeholder='Your name here'/><br/>

        <label htmlFor="email">Enter an email:</label>
        <input type="email" onChange={handleInputChange} name='email' placeholder='Your email here'/><br/>

        <label htmlFor="phone">Enter your phone number:</label>
        <input type="text" onChange={handleInputChange} name='phone' placeholder='Your phone number here'/><br/>

        <label htmlFor="password">Enter a new password:</label>
        <input type="password" onChange={handleInputChange} name='password' placeholder='Your new password here'/><br/>

        <button type='submit'>Submit Information</button>
      </form>
    </>
  )
}

function App() {
  return (
    <>
      <Header/>
      <GeneralInformationForm/>
    </>
  )
}

export default App
