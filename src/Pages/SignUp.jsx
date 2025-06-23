import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
       <form className='h-[500px] w-[400px] bg-amber-500 rounded-2xl flex flex-col justify-center p-[20px]'>
       <h1 className='text-2xl text-center'><b>SignUp</b></h1>
       <div className='h-max w-[100%] flex justify-center flex-col gap-2'>
          <label htmlFor="">Name</label>
          <input id="email" className="border-2 border-gray-100 px-4 mb-2 py-2 rounded-md outline-none" type="email" />
          <label htmlFor>Email</label>
          <input id="email" className="border-2 border-gray-100 px-4 mb-2 py-2 rounded-md outline-none" type="email" />
          <label htmlFor>Password</label>
          <input id="password" className="border-2 border-gray-100 px-4 mb-2 py-2 rounded-md outline-none" type="password" />
          <button className='h-[40px] w-[100px] border-2 text-white border-amber-50 bg-green-950 rounded-md hover:bg-green-800 hover:text-black'><b>logIn</b></button>
          <Link className='text-black' to='/login'>Already have an account?<b className='hover:border-b-2 hover:border-b-black'>LogIn</b></Link>

        </div>

       </form>
    </div>
  )
}

export default SignUp
