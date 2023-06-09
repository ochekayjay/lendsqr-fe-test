import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter } from 'react-router-dom'
import './index.scss'
import './avenir-next/MainFolder/AvenirNextLTPro-Bold.otf'
import './avenir-next/MainFolder/AvenirNextLTPro-It.otf'
import './avenir-next/MainFolder/AvenirNextLTPro-Regular.otf'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
)
