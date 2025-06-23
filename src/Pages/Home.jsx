import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
// import MuiAccordionSummary, {
//   AccordionSummaryProps,
//   accordionSummaryClasses,
// } from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';




const Home = (props) => {

  const [Itemprod, setItemprod] = useState([]);
    async function getData(){
     let product = await fetch('https://dummyjson.com/products?limit=0');
     let data = await product.json();
     setItemprod(data.products)
    }
    
    useEffect(()=>{
      getData()
      
    },[]) 
     
    function HandleCart(obj,i){
      props.Data(obj);
    }

    function HandleWish(obj1,i){
      props.Y(obj1)
    }

    let Item = props.AllSearch

    let FilterArr = Itemprod.filter((ele)=>ele.title.toLowerCase().includes(Item.toLowerCase())||ele.category.toLowerCase().includes(Item.toLowerCase()))

  
    
    
  

  return (
    <div className='p-2'>         
         <div className='grid w=[100%] m-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3' >
              {
               FilterArr.map((ele,i)=>{
                  return <div className='relative shadow-2xl shadow-gray-800' >
                    <div className='w-full flex justify-center items-center flex-col p-5 gap-3 relative '>
                      <img className='md:h-[350px] w-full shadow-2xs shadow-gray-800   ' src={ele.thumbnail} alt="" />
                      <FaRegHeart onClick={()=>HandleWish(ele,i)} className='absolute h-[30px] w-[30px] top-[20px] left-[20px]' />
                      <h3 className='text-center text-black  text-[16px]'>{ele.title}</h3>
                      <div className='w-full flex flex-col justify-center items-center gap-2 '>
                       <Link className='w-full' to={'/view'} state={{ele,Itemprod }}><button className='bg-lime-600 hover:bg-lime-500 hover:text-[17px] h-[40px] w-full rounded-xl text-[15px] cursor-pointer p-2'>View Details</button></Link>
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

export default Home 






