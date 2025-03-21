import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {

  const [UserDetails, setUserDetails] = useState({name:'Gullu',
    age:'23',course:'B.tech'
  });


  return (
    <UserContext.Provider value={{UserDetails,setUserDetails}}>

      {props.children}
      
    </UserContext.Provider>
  )
}

export default UserState
