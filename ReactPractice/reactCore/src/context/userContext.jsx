import React,{createContext, useState} from 'react'


export const UserContext=createContext()

export const UserProvider = ({children}) => {

  const[user,SetUser]=useState({name:"John Dev",age:20})
  return (

<UserContext.Provider value={{user,SetUser}}>
  {children}
</UserContext.Provider>  )
}

