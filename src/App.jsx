import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import EmailTaker from './components/EmailTaker'
import PasswordTaker from './components/PasswordTaker'


function GeneralInformationForm(){
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  if (email == null) {
    return <EmailTaker onSubmit={submitEmailHandler} />
  }

  if (password == null) {
    return <PasswordTaker onSubmit={submitPasswordHandler} />
  }

  function submitEmailHandler(e) {
    setEmail(e.currentTarget.email.value)
  }

  function submitPasswordHandler(e) {
    setPassword(e.currentTarget.password.value)
  }

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
