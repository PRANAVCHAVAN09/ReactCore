import React, { useState } from "react";

function WithoutUseMemoExample() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Simulating an expensive calculation
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // Simulate heavy computation
    return num * 2;
  };

  // Directly call the expensive calculation
  const calculatedValue = expensiveCalculation(count);

  return (
    <div>
      <h1>useMemo Example (Without useMemo)</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Calculated Value: {calculatedValue}</p>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
        />
        <p>Unrelated Input: {input}</p>
      </div>
    </div>
  );
}

export default WithoutUseMemoExample;
