import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex gap-3'>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/cart'}>Cart</Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar
