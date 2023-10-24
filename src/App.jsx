import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import EmailTaker from './components/EmailTaker'
import PasswordTaker from './components/PasswordTaker'


function GeneralInformationForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [isEmailEntered, setIsEmailEntered] = useState(false);

  if (email.length == 0) {
    return <EmailTaker onSubmit={submitEmailHandler} />
  }

  function EmailEntered(email){
    if(email.length > 0){
      setIsEmailEntered(true);
    }
  }


  function submitEmailHandler(e) {
    setEmail(e.currentTarget.email.value)
  }

  function submitPasswordHandler(e) {
    setPassword(e.currentTarget.password.value)
  }

  return(
    <>
      {isEmailEntered ? (
        <PasswordTaker onSubmit={submitPasswordHandler} />
      ) : (
        <EmailTaker onSubmit={submitEmailHandler} />
      )}
    </>
  )
}

function EmailForm(){
  const [email, setEmail] = useState("");
  const [isEmailEntered, setIsEmailEntered] = useState(false);

  if (email.length == 0) {
    return <EmailTaker onSubmit={submitEmailHandler} />
  }

  function EmailEntered(email){
    if(email.length > 0){
      setIsEmailEntered(true);
    }
  }
}

function PasswordForm(){
  const [password, setPassword] = useState(null);
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  if (password.length == 0) {
    return <PasswordTaker onSubmit={submitPasswordHandler} />
  }

  useEffect((password) => {
    if(password.length > 0){
      setIsPasswordEntered(true);
    }
  })

  function submitPasswordHandler(e) {
    setPassword(e.currentTarget.password.value)
  }
}

function App() {

  return (
    <>
      <Header/>
      {isEmailEntered ? (
        <PasswordForm onSubmit={submitPasswordHandler}/>
      ) : (
        <EmailForm onSubmit={submitEmailHandler} />
      )}
    </>
  )
}

export default App
