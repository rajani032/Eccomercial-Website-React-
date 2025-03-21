import React, { useContext, useRef, useState } from 'react'
import CounterContext from '../context/CounterContext';
import UserContext from '../context/UserContext';

const Home = () => {

  let CTX = useContext(CounterContext);

  let ctx1 = useContext(UserContext);
  console.log(ctx1)

  const [ShowName, setShowName] = useState(false);
  const [ShowAge, setShowAge] = useState(false);
  const [ShowCourse, setShowCourse] = useState(false);

  let NameRef = useRef()
  let AgeRef = useRef()
  let CourseRef = useRef()

  function HandleName(){
    setShowName(true)
  }
  function HandleAge(){
    setShowAge(true)
  }
  function HandleCourse(){
    setShowCourse(true)
  }

  function handleNameSubmit(){
    let value = NameRef.current.value;
    console.log(value)
    ctx1.setUserDetails({...ctx1.UserDetails,name:value})
    setShowName(false)

    

  }

  function handleAgeSubmit(){
    let value = AgeRef.current.value;
    console.log(value)
    ctx1.setUserDetails({...ctx1.UserDetails,age:value})
    setShowAge(false)

  }

  function handleCourseSubmit(){
    let value = CourseRef.current.value;
    console.log(value)
    ctx1.setUserDetails({...ctx1.UserDetails,course:value})
    setShowCourse(false)

  }





    
  // function HandleAdd(){
  //     CTX.setCounter(CTX.Counter+1)
  // }
  return (
    <div className='h-[100vh] w-full bg-red-600 flex justify-center items-center'>
       <div className='h-[600px] w-[500px] bg-blue-900 rounded-2xl border-10 border-green-600 flex flex-col gap-3 justify-center items-center '>

          <div className='flex flex-col gap-3 h-[200px] w-[300px] bg-amber-500 justify-center items-center rounded-xl  '>
           {ShowName===true && <div className='flex gap-3'><input ref={NameRef} className='h-[30px] w-[150px] border-2 p-1 outline-none border-black rounded-[5px]'  type="text" placeholder='enter your name'/><button onClick={handleNameSubmit} className='border-2 border-black h-[30px] w-[100px] rounded-[5px] p-1'>Submit</button></div>}
           {ShowAge===true && <div className='flex gap-3'><input ref={AgeRef} className='h-[30px] w-[150px] border-2 p-1 outline-none border-black rounded-[5px]'  type="number" placeholder='enter your age'/><button onClick={handleAgeSubmit} className='border-2 border-black h-[30px] w-[100px] rounded-[5px] p-1'>Submit</button></div>}
            {ShowCourse===true&&<div className='flex gap-3'><input ref={CourseRef} className='h-[30px] w-[150px] border-2 p-1 outline-none border-black rounded-[5px]'  type="text" placeholder='enter your course'/><button onClick={handleCourseSubmit} className='border-2 border-black h-[30px] w-[100px] rounded-[5px] p-1'>Submit</button></div>}
          </div> 
          <div className='flex flex-col gap-3 h-[200px] w-[300px] bg-amber-500 justify-center items-center rounded-xl'>
            <div className='flex gap-3'><h1> Name is {ctx1.UserDetails.name}</h1> <button onClick={HandleName} className='border-2 border-black rounded-[5px] p-1'>Edit Name</button></div>
            <div className='flex gap-3'><h1> Age is {ctx1.UserDetails.age}</h1> <button onClick={HandleAge} className='border-2 border-black rounded-[5px]  p-1'>Edit Age</button></div>
            <div className='flex gap-3'><h1> Course is {ctx1.UserDetails.course}</h1> <button onClick={HandleCourse} className='border-2 border-black rounded-[5px]  p-1'>Edit Course</button></div>
          </div> 
          

        </div>
    </div>

    // <div>
    //   <h1>This is home page</h1>
    //   <h1>Count = {CTX.Counter}</h1>
    //   <button onClick={HandleAdd}>Add New One</button>
    // </div>
  )
}

export default Home
