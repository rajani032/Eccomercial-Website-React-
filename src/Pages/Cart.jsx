import React, { useState , useMemo} from 'react'
import { IoBag } from "react-icons/io5";

const Cart = (props) => {
  let data = props.Item
  // console.log(data)

  const [all, setall] = useState([]);

  let memo=useMemo(()=>{
    let s=0
    for(let val of data){
      s=s+val.price
    }
    return s
  },[data])
  

  function HandleDelete(obj,i){
    let CopyArr = [...data]
    CopyArr.splice(i,1)
    props.setItem(CopyArr)
   
 }


  function HandleIncreament(obj,i){
    obj.price=obj.price+(obj.price/obj.quantity)
    obj.quantity=obj.quantity+1
    let copyarr=[...data]
    copyarr[i]=obj
    setall(copyarr)
 }

 function HandleDecreament(obj,i){
  if(obj.quantity>1){
    obj.price=obj.price+(obj.price/obj.quantity)
    obj.quantity=obj.quantity-1
    let copyarr=[...data]
    copyarr[i]=obj
    setall(copyarr)
    }
    else{
      HandleDelete(obj,i)
    }
  }





  return (
    <div>
      {data.length>0 ?
      <div className="relative  bg-white overflow-x-auto">
      <table className="w-full border-4 bg-white text-center border-green-400 text-black text-sm  rtl:text-right">
        <thead className="text-xs">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sno
           </th>
           <th scope="col" className="px-6 py-3">
            Product
           </th>
           <th scope="col" className="px-6 py-3">
            Price
           </th>
           <th scope="col" className="px-6 py-3">
            Quantity
           </th>
           <th scope="col" className="px-6 py-3">
           
           </th>
          </tr>
        </thead>
      <tbody>
      {
        data.map((ele,i)=>{
          return  <tr className="bg-w border-b border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
            {i+1}
            </th>
            <td className="px-6 py-4">
            <img src={ele.thumbnail} className='w-[100px] m-auto h-[100px]' alt="" />
            </td>
            <td className="px-6 py-4">
            {ele.price}
            </td>
            <td className="px-6 py-4">
            <button onClick={()=>HandleIncreament(ele,i)} className='bg-blue-700 rounded-md px-3 py-2 text-white mx-1'>+</button>
            {ele.quantity} 
            <button onClick={()=>HandleDecreament(ele,i)} className='bg-green-700 rounded-md px-3 py-2 text-white mx-1'>-</button> 
            </td>
            <td>
            <button onClick={()=>{HandleDelete(ele,i)}}  className='bg-red-700 text-white hover:bg-red-600 px-3 py-2 rounded-md'>Delete</button>
            </td>
          </tr>
        })
      }
   
      </tbody>
    </table>
  <h1 className='text-center text-xl font-sans font-semibold ml-[100px]'>total={memo}</h1> </div> : <div className='flex text-xl mt-60 justify-center m-auto font-extrabold'><IoBag size={30}/>Cart is empty</div>
  }


</div>
)
}

export default Cart
