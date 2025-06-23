import './App.css'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import ViewDetail from './Pages/ViewDetail'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import { useState } from 'react'
import Wishlist from './Pages/Wishlist'
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [AllCart, setAllCart] = useState([]);

  const [Allwishes, setAllwishes] = useState([]);

  const [SearchEle, setSearchEle] = useState('');


  function AddCart(ans){
    ans.quantity = 1  
    let find = AllCart.find((item)=>item.id===ans.id)

    if(find){
      return toast.warning('already added' , {position:'top-center'}   )
    }
    else{
      let CopyArr2 = [...AllCart,ans]
      setAllCart(CopyArr2)
      return toast.success('Successfully added',{position:'top-center'} )
    }

  }

  function AddWish(wish){
    let CopyArr2= [...Allwishes,wish]
    setAllwishes(CopyArr2);
  }

  function AddNavbar(Input){
    setSearchEle(Input)
  }
  console.log(SearchEle)

  return (
    <div>
     
     <BrowserRouter>
     <div>
        <Navbar  AllCart={AllCart} AddNavbar={AddNavbar}/>
      </div>
      <br/><br/><br/><br/>
      <div>
       <Routes>
         <Route  path='/' element={<Home Data={AddCart} Y={AddWish} AllSearch={SearchEle}/>}/>
         <Route  path='/view' element={<ViewDetail/>}/>
         <Route  path='/signup' element={<SignUp/>}/>
         <Route  path='/login' element={<LogIn/>}/>
         <Route  path='/about' element={<About/>}/>
         <Route  path='/cart' element={<Cart Item={AllCart} setItem={setAllCart} />}/>
         <Route  path='/wish' element={<Wishlist product={Allwishes} setAllwishes={setAllwishes}  />}/>
       </Routes>
       </div>
       <ToastContainer />
    
     </BrowserRouter>
     
    </div>
  )
}

export default App
