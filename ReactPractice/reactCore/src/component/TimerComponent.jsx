import React ,{useEffect,useState} from 'react'

const TimerComponent =()=>{
 const [count,setCount]=useState(0)

 useEffect(()=>{
    const Timer = setInterval(()=>{

        setCount((prev)=>prev+1)
        console.log("Component Will Update",count +1)

    },1000)

    return (()=>{

        clearInterval(Timer)

        console.log("Component Will Unmount")
    })

 },[count])

    return (
        <>
      <h1>Timer: {count}</h1>
      </>
    )
}

export default TimerComponent