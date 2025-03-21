import React, { useContext, useEffect, useState } from 'react'
import UseContext from '../Context/UseContext';

const Home = () => {

    const [Products, setProducts] = useState([]);
    async function DataFetch() {
      let data = await fetch('https://api.escuelajs.co/api/v1/products')
      let GetData = await data.json()
      console.log(GetData)//[{},{},{}]
      setProducts(GetData)
        
    }
 
  useEffect(()=>{
    DataFetch()
  },[])

  let ctx = useContext(UseContext)

  function HandleCart(obj,i){
    let copyArr = [...ctx.AllItem]
    copyArr.push(obj)
    ctx.setAllItem(copyArr);
  }

  return (
    <div>
      <div className='w-[99%] h-max grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-3'>
      { 
        Products.map((ele,i)=>{
          return <div  className='h-max bg-amber-500 flex flex-col justify-center items-center gap-2 p-2'>
            <img src={ele.images} alt="" />
            <p className='text-center'>{ele.title}</p>
            <button onClick={()=>HandleCart(ele,i)} className='h-[40px] w-[150px] p-2 bg-emerald-700 rounded-xl'>Add cart</button>
          </div>
        })
        
      }  
      </div>
    </div>
  )
}

export default Home
