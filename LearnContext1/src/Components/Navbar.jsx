import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed  w-full'>
      <ul className=' h-[50px] w-full bg-amber-300 flex justify-center gap-[30px] items-center'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
