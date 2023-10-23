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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  if (email == null) {
    return <NameTaker onSubmit={submitEmailHandler} />
  }
  if (password == null) {
    return <PasswordTaker onSubmit={submitHandler} />
  }

  function submitEmailHandler(e) {
    setName(e.currentTarget.email.value)
  }

  function submitPasswordHandler(e) {
    setName(e.currentTarget.password.value)
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
