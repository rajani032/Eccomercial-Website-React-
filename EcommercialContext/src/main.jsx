import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseState from './Context/UseState.jsx'


createRoot(document.getElementById('root')).render(
  <UseState>
    <App />
  </UseState>
)
