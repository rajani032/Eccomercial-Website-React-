import React, { useContext } from 'react'
import UseContext from '../Context/UseContext'
import {useState} from 'react'

const Cart = () => {
    let ctx = useContext(UseContext)
    console.log(ctx)
    
    console.log(ctx.AllItem)

  return (
    <div>
      
    </div>
  )
}

export default Cart
