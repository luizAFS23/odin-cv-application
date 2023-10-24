import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import EmailTaker from './components/EmailTaker'
import PasswordTaker from './components/PasswordTaker'
import NextStep from './components/NextStep'


function GeneralInformationForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function submitEmailHandler(e) {
    setEmail(e.currentTarget.email.value)
  }

  function submitPasswordHandler(e) {
    setPassword(e.currentTarget.password.value)
  }

  return(
    <>
      {email.length > 0 ?
        <PasswordTaker onSubmit={submitPasswordHandler} />
      : 
        <EmailTaker onSubmit={submitEmailHandler} />
      }
      {password.length > 0 && <NextStep/>}
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
