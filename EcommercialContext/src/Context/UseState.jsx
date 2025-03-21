import React, { useState } from 'react'
import UseContext from './UseContext'

const UseState= (props) => {
   const [AllItem, setAllItem] = useState([]);

  return (
    <UseContext.Provider value={{AllItem,setAllItem}}>
       {props.children}
      
    </UseContext.Provider>
  )
}

export default UseState
