import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import SignIn from './PreAuth/SignIn'
import { Routes, Router, Route } from 'react-router-dom'
import Dashboard from './PostAuth/Dashboard/Dashboard'
import UserDetails from './PostAuth/UserDetailsHolder/UserDetails'
import { UserProvider } from './ContextApi/ContextApi'

function App() {
  


  return (
    <UserProvider>
    <div className="App">
      <Routes>
        <Route path={"/"} element={<SignIn />}/>
        <Route path={'/dashboard'} element={<Dashboard/>} />
        <Route path={'/userdetails'} element={<UserDetails/>}/>
      </Routes>
    </div>
    </UserProvider>
  )
}

export default App
