import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);

  useEffect(() => {
    console.log("useEffect trigger");
  }, [lastCount]);

  const counter = () => {
    setCount(count + 1);
    if ((count + 1) % 5 == 0) {
      setLastCount(lastCount + 1);
    }
  };
  return (
    <div>
      <h1>useEffect</h1>
      <p>count value {count}</p>
      <button onClick={counter}>click me</button>
      <p>last count value {lastCount}</p>
    </div>
  );
};

export default UseEffect;
