import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NextStep from './components/NextStep'
import GeneralInformationForm from './components/GeneralInformationForm'

function App() {

  return (
    <>
      <Header/>
      <GeneralInformationForm/>
      <NextStep/>
    </>
  )
}

export default App
