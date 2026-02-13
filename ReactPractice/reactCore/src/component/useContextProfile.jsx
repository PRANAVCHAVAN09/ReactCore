import React,{useContext, useState} from 'react'

import { UserContext } from '../context/userContext'

const UseContextProfile = () => {

    const [Toggle,Settoggle]=useState(false)
    
    const {user,SetUser}=useContext(UserContext)


    console.log('helllloooo2222222')



   const Username = () =>{

    if(Toggle==false){
        SetUser({name:"Hello Dabe" ,age:85})
        Settoggle(true)
    }else{
        SetUser({name:"Johnnnnn Deb" ,age:15} )
        Settoggle(false)

    }
   }

  return (
    <div className='center-Context'>
        <h2>Profile</h2>
        <p>Name:- {user.name}</p>
        <p>age:- {user.age}</p>
        <button onClick={Username}> change</button>
    </div>
  )
}

export default UseContextProfile