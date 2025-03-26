import React, { useContext } from 'react'
import UseContext from '../Context/UseContext'
import {useState} from 'react'

const Cart = () => {
    let ctx = useContext(UseContext)
    console.log(ctx)
    
    console.log(ctx.AllItem)
    let products = ctx.AllItem; 
    // products.quantity=1
    

  return (
    <div>
      <table className=' border-2 border-black'>
        <thead>
          <tr className='p-3'>
            <th className='p-3'>Sn.</th>
            <th className='p-3'>Image</th>
            <th className='p-3'>Product Name</th> 
            <th className='p-3'>Price</th>
            <th className='p-3'>Quantity</th>
            <th className='p-3'>Operation</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr> */}
            {/* <td>1</td>
            <td>{products.images}</td>
            <td>{products.title}</td>
            <td>${products.price}</td> */}
          {/* </tr> */}
          {
            products.map((ele,i)=>{
              return <tr>
                <td className='p-3'>{i+1}</td>
                <td className='p-3'><img src={ele.image}alt="" className='h-[80px] w-[80px]'/></td>
                <td className='p-3'>{ele.name}</td>
                <td className='p-3'>{ele.caloriesPerServing}</td>
                <td className='p-3'>
                  <button className='bg-green-700 p-1 rounded'>+</button>
                  {ele.quantity}
                  <button className='bg-red-700 p-1 rounded'>-</button>
                  </td>
                <td className='p-3'> <button className='bg-red-700 cursor-pointer rounded p-3 text-white'>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default Cart
