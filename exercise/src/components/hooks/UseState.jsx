import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  var x = 0;

  const changeHandler = () => {
    x = x + 1;
    setCount(count + 1);
    console.log(x);
  };

  const changeMinHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Use State</h1>
      <p>value x - {x}</p>
      <p>value count - {count}</p>
      <button onClick={changeHandler}>increase</button>
      <button onClick={changeMinHandler}>decrease</button>
    </div>
  );
};

export default UseState;
