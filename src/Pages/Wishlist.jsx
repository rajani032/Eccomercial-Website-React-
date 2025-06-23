import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Wishlist = (props) => {

  let Products = props.product
  console.log(Products)

  function handleDelete(obj,i){
    let copyArr = [...props.product]
    copyArr.splice(i,1)
    props.setAllwishes(copyArr)
  }
  return (
    <div>
      <div className='grid w=[100%] m-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3' >
          {
            Products.map((ele,i)=>{
              return <div className='relative shadow-2xl shadow-gray-800'>
              <div className='w-full flex justify-center items-center flex-col p-5 gap-3'>
              <img className='md:h-[350px] w-full shadow-2xs shadow-gray-800   ' src={ele.thumbnail} alt="" />
              <FaHeart onClick={()=>handleDelete(ele,i)} className='absolute h-[30px] w-[30px] top-[20px] left-[20px] text-rose-600 '/>
              <h3 className='text-center text-black  text-[16px]'>{ele.title}</h3>
              <div className='w-full flex flex-col justify-center items-center gap-2 '>
              <Link className='w-full' to={'/view'}  state={{ele}}><button className='bg-lime-600 hover:bg-lime-500 hover:text-[17px] h-[40px] w-full rounded-xl text-[15px] cursor-pointer p-2'>View Details</button></Link>
              <button onClick={()=>HandleCart(ele,i)} className='bg-emerald-700 hover:bg-emerald-600 h-[40px] w-full rounded-xl text-[15px] hover:text-[17px] cursor-pointer p-2'>Add to Cart</button>
               </div>
               </div>
               </div>
              })
            }
          </div>
    </div>
  )
}

export default Wishlist
