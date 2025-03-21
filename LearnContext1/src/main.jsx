import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterState from './context/CounterState.jsx'
import UserState from './context/UserState.jsx'

createRoot(document.getElementById('root')).render(
  <UserState>
  <CounterState>
    <App />
  </CounterState>
  </UserState>
)
