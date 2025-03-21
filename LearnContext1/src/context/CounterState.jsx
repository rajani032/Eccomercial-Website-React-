import React, { useState } from 'react'
import CounterContext from './CounterContext'


const CounterState = (props) => {
   let name = "Shivani(Gullu)"
   let age = '23 is running'  

   const [Counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{name,age, Counter,setCounter}}>
       {props.children}

    </CounterContext.Provider>
  )
}

export default CounterState
