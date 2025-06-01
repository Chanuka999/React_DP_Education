import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
const Counter = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>count - {count}</h1>
      <h1>cout-{state.count}</h1>
      {/* <button onClick={() => setCount(count + 1)}> add +</button>
      <button onClick={() => setCount(count - 1)}>minus -</button>
      <button onClick={() => setCount(0)}>Reset</button> */}

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Counter;
