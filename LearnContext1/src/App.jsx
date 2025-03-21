import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <BrowserRouter>
        <div>
        <Navbar/>
        </div>
        <br />
        <div>
           <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
           </Routes>
           </div>
        </BrowserRouter>
        </div>
        
  )
}

export default App
