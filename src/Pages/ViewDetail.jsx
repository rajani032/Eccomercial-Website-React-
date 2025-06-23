import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ViewDetail = (props) => {
   
  let location = useLocation();
  console.log(location)
  // console.log(location.state)
  let AllDetail = location.state.ele;
  let AllProducts = location.state.Itemprod || [];
  console.log(AllDetail)
  console.log(AllProducts)

  const [Allimage, setAllimage] = useState('');

  function HandleReplacing(url){
    // console.log(url)
    setAllimage(url)

  }
  let FilterArr =AllProducts.filter((obj)=>obj.category===AllDetail.category)
  console.log(FilterArr)



  return (
    <div>
      <div className='h-max w-full flex justify-center item-center gap-2'>
        <div className='h-[100%] w-[60%]  shadow-2xl shadow-black flex justify-center flex-col gap-5 items-center'>
          <img className='lg:h-[400px] lg:w-[500px] md:h-[400px] md:w-[400px] sm:h-[370px] sm:w-[370px]  h-[250px] w-[250px] shadow-xl shadow-black ' src={Allimage?Allimage:AllDetail.thumbnail} alt="" />
          <div className='lg:flex md:block sm:block block gap-1'>
          {
            AllDetail.images.map((ele,i)=>{
              return <div className='lg:h-[150px] lg:w-[150px] md:h-[180px] md:w-[180px]  h-[100px] w-[100px] shadow-xl shadow-black flex items-center justify-center' >
              <img onClick={()=>HandleReplacing(ele)} src={ele} alt="" /></div>
            })
          }
          </div>
        </div>
        <div className='h-[100%] w-[40%]  shadow-2xl shadow-black lg:text-[18px] md:text-[15px] sm:[11px] text-[8px] p-2'>
          <p className='bg-gray-400'><b>State</b></p>
          <p><b>AvailabilityStatus:</b>{AllDetail.availabilityStatus}</p>
          <p><b>Brand:</b>{AllDetail.brand}</p>
          <p><b>Category:</b>{AllDetail.category}</p>
          <p><b>description:</b>{AllDetail.description}</p>
          <p className='bg-gray-400'><b>Dimensions</b></p>
          <p><b>Depth:</b>{AllDetail.dimensions.depth}</p>
          <p><b>Height:</b>{AllDetail.dimensions.height}</p>
          <p><b>width:</b>{AllDetail.dimensions.width}</p>
          <p><b>DiscountPercentage:</b>{AllDetail.discountPercentage}</p>
          <p className='bg-gray-400'><b>Meta</b></p>
          <p><b>Barcode:</b>{AllDetail.meta.barcode}</p>
          <p><b>CreatedAt:</b>{AllDetail.meta.createdAt}</p>
          <p><b>UpdatedAt:</b>{AllDetail.meta.updatedAt}</p>
          <p><b>MinimumOrderQuantity:</b>{AllDetail.minimumOrderQuantity}</p>
          <p><b>Price:$</b>{AllDetail.price}</p>
          <p><b>Rating:</b>{AllDetail.rating}</p>
          <p><b>ReturnPolicy:</b>{AllDetail.returnPolicy}</p>
          <p><b>Title:</b>{AllDetail.title}</p>
          <p><b>WarrantyInformation:</b>{AllDetail.warrantyInformation}</p>
          <p><b>Stock:</b>{AllDetail.stock}</p>
        </div>
      </div>

               
      <div className='grid w=[100%] m-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3' >
        {
         FilterArr.map((ele,i)=>{
            return <div className='relative shadow-2xl shadow-gray-800' >
              <div className='w-full flex justify-center items-center flex-col p-5 gap-3'>
                <img className='md:h-[350px] w-full shadow-2xs shadow-gray-800   ' src={ele.thumbnail} alt="" />
                <h3 className='text-center text-black  text-[16px]'>{ele.title}</h3>
                <div className='w-full flex flex-col justify-center items-center gap-2 '>
                  <Link className='w-full' to={'/view'} state={{ele,Itemprod:AllProducts}} ><button className='bg-lime-600 hover:bg-lime-500 hover:text-[17px] h-[40px] w-full rounded-xl text-[15px] cursor-pointer p-2'>View Details</button></Link>
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

export default ViewDetail
