import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = (props) => {

let InputTag = useRef()
 
function Handlesearch(e){
  e.preventDefault()
  props.AddNavbar(InputTag.current.value)
} 

const [showSidebar, setshowSidebar] = useState();

  return (
    <div>
      <div className='fixed w-full z-10'>
      <nav className='h-[80px] w-[100%] bg-amber-700 text-black flex justify-between items-center p-7'>
      <h1 class="text-xl font-semibold italic text-black">Products</h1>

    <form onSubmit={Handlesearch}>
      <div className='flex gap-0 justify-center items-center border-2 border-pink-600 rounded-[8px]'>
        <button onClick={()=>props.AddNavbar('')} type='button'  className="px-3 py-2 bg-black h-[40px] cursor-pointer rounded-l-md font-[20px] w-[50px] hover:bg-gray-700 text-white hover:text-amber-300">All</button>
        <input ref={InputTag} className='h-[40px] w-[250px] border-2 border-black  outline-none  flex  justify-center items-center p-[10px] bg-neutral-400 cursor-pointer hover:bg-neutral-500 hover:text-white ' type="text" placeholder='enter your product...'  />
        <div onClick={Handlesearch} className='flex justify-center items-center bg-black text-white h-[40px] w-[50px] rounded-e-md hover:bg-gray-700 cursor-pointer hover:text-amber-300'><FaSearch size={20} /></div>
      </div>
    </form>

      <ul className=' h-[100%] hidden gap-5 text-black font-semibold md:flex'>
        <li className='border-2 border-black flex justify-center items-center p-4 rounded-md bg-emerald-600 hover:bg-emerald-400 text-white'><Link to={'/'}>Home</Link></li>
        <li className='border-2 border-black flex justify-center items-center p-4 rounded-md bg-emerald-600 hover:bg-emerald-400 text-white'><Link to={'/about'}>About</Link></li>
        <Link to={'/cart'} ><FaCartArrowDown size={30}/></Link>
        <sub className='text-[20px]'><b>{props.AllCart.length}</b></sub>
        <Link to={'/wish'} ><FaHeart size={30}/></Link>
        <li className='bg-lime-800 hover:bg-lime-700 p-4 flex justify-center border-2 border-black items-center rounded-md text-white'><Link to={'/login'}>LogIn</Link></li>
      </ul>

      {showSidebar &&  <ul className='flex flex-col bg-amber-700 p-5 absolute top-[81px] left-0  gap-5 text-black font-semibold  md:hidden z-10'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <div className='flex gap-3'>
        <Link to={'/cart'} ><FaCartArrowDown size={30}/></Link>
          <sub className='text-[20px]'><b>{props.AllCart.length}</b></sub>
        </div> 
        <li className='bg-lime-800 hover:bg-lime-700 p-1 rounded-xl'><Link to={'/signup'}>SignUp</Link></li>
        <li className='bg-lime-800 hover:bg-lime-700 p-1 rounded-xl'><Link to={'/login'}>LogIn</Link></li>
      </ul>}

      <div onClick={()=>setshowSidebar(!showSidebar)}  className='md:hidden block'><TiThMenu  size={20} /></div>

      
      </nav>
      </div>
    </div>
  )
}

export default Navbar
