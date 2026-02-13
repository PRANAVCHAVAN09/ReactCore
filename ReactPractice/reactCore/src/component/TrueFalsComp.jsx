import React,{useRef,useState} from 'react'

import TimerComponent from '../component/TimerComponent'
import WithoutUseMemoExample from './withoutMemoComponent';

import MemoComponent from './MemoComponent';

const TrueFalsComp = () => {
    const countRef = useRef(0);
    const inputRef = useRef(null);

    const [renderCount, setRenderCount] = useState(0);
const[showTimer,setShowTimer] =useState(false)
  
    const incrementCount = () => {

      // console.log(countRef.current,countRef.current.focus(),"9999999999999")
      countRef.current += 1; // This doesn't trigger a re-render
      console.log('Count:', countRef.current);

      if (inputRef.current) {
        inputRef.current.focus(); // Focus the input
      }
    };
  
    return (
      <div>
        <p>UseMmeo</p>
        {/* <WithoutUseMemoExample/> */}
        <MemoComponent/>
        <h2>useRef Example: Timer</h2>
        <input ref={inputRef} type="text" placeholder="Focus me!" />
        <p>Count (not causing re-render): {countRef.current}</p>
        <p>Render Count: {renderCount}</p>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={() => setRenderCount((prev) => prev + 1)}>
          Trigger Re-render
        </button>
        <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>
      {showTimer && <TimerComponent />}
    </div>

      </div>
    );
}

export default TrueFalsComp