import React ,{useState,useMemo} from 'react'

const MemoComponent = ()=>{
    const [input,setInput]=useState("")
    const[count,setCount]=useState(0)


    const ExpesiveCALC = () => {
        console.log("Calculating...");
        return count * 2; // Example: some derived calculation
      };
// const calculatedValue=ExpesiveCALC()
    const calculatedValue = useMemo(()=>ExpesiveCALC(),[count]); // Call the expensive calculation here

    return(
        <>
        <p>Count : {count}</p>

        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <p>Memorized Val:{calculatedValue}</p>

        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>DisplayInput:{input}</p>
        </>
    )
}

export default MemoComponent