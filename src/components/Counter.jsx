import React, { useState } from 'react';
const Counter = function () {
  const [counter, setCounter] = useState(0);

  // const changeCounter = (e) => {
  //   setCounter(e.target.value);
  // };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };



  return (
    <div>
      <div>{counter}</div>
      {/* <input type="input" value={counter} onChange={changeCounter} /> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
