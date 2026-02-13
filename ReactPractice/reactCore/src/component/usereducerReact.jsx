
import React,{useContext} from 'react'

import { countContext } from '../context/useCountContext'
const userreducerReact=()=>{

  console.log('hellllo111111')
    
    const {state,dispatch}=useContext(countContext)

    
      return (
        <>
        <div className='center-container'> 
          <p className='count-text'>Count : {state.count} </p>
          <div className='button-container'>
            <button onClick={()=>dispatch({type:"Inc"})}>Increment + </button>
            <button onClick={()=>dispatch({type:"Dec"})}>Decrement - </button>
            <button onClick={()=>dispatch({type:"Res"})}>Reset</button>
          </div>
    
        </div>
        </> 
       )
}

export default userreducerReact