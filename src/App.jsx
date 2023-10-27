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
    e.preventDefault();
    setEmail(e.currentTarget.email.value)
  }

  function submitPasswordHandler(e) {
    e.preventDefault();
    setPassword(e.currentTarget.password.value)
  }

  function ReturnPassword(){
    if(password.length < 5){
      return(<div>Ypur password needs to be 5 or more characters long.</div>)
    }

    if(password.length >= 5){
      return(<NextStep/>);
    }
  }

  return(
    <>
      {email.length > 0 ? (
        <PasswordTaker onSubmit={submitPasswordHandler} value={password}/>
      )
      : 
        (<EmailTaker onSubmit={submitEmailHandler} value={email}/>)
      }
      
    </>
  )
}

function NextStep(){
  return(
    <div>
      
    </div>
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
