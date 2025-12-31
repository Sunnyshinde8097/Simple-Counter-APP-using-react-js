import React, { useState } from "react";
import "./CounterApp.css"; // import CSS file

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const doubleIncrement = () => setCount(count + count);


  const decrement = () => { if (count > 0) { setCount(count - 1); } }; 
  const doubleDecrement = () => { if (count > 0) { setCount(Math.floor(count / 2)); } };

  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <div className="button-group">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button className="btn increment" onClick={doubleIncrement}> Double Increment</button>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
        <button className="btn decrement" onClick={doubleDecrement}> Double Decrement</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
