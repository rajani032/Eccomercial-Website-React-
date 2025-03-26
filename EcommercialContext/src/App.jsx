import './App.css'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
