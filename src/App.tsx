import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import SignIn from './PreAuth/SignIn'
import { Routes, Router, Route } from 'react-router-dom'
import Dashboard from './PostAuth/Dashboard/Dashboard'
import { UserProvider } from './ContextApi/ContextApi'

function App() {
  


  return (
    <UserProvider>
    <div className="App">
      <Routes>
        <Route path={"/"} element={<SignIn />}/>
        <Route path={'/dashboard'} element={<Dashboard/>} />
      </Routes>
    </div>
    </UserProvider>
  )
}

export default App
