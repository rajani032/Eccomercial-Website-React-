import React, { useContext } from 'react'
import UseContext from '../Context/UseContext'
import {useState} from 'react'

const Cart = () => {
    let ctx = useContext(UseContext)
    console.log(ctx)
    
    console.log(ctx.AllItem)
    let products = ctx.AllItem; 


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Sn.
            </th>
          </tr>
        </thead>
      </table>
      
    </div>
  )
}

export default Cart
