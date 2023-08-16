import React from "react";
import { useState } from "react";

function Counter(){
  const [counterNumber, setCounterNumber] = useState(0);

  const plusplus = ()=>{
    setCounterNumber(counterNumber+1);
  }
  const minusminus = ()=>{
    if(counterNumber>0){
      setCounterNumber(counterNumber-1);
    }
  }

  const reset = ()=>{
    setCounterNumber(0);
  }

  return (
    <div style={{ display:'flex', alignItems:'center', flexDirection: 'column' }}>
      <h1>Counter</h1>
      <h3>The Number is: {counterNumber}</h3>
      <div>
        <button onClick={plusplus}>+</button>
        <button onClick={minusminus}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;