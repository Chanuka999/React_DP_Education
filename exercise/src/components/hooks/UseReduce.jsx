import React, { useReducer, useState } from "react";
import NameList from "./NameList";

const reducrer = (state, action) => {
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

const UseReduce = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducrer, { count: 0 });

  return (
    <div>
      <h1>use Reduce</h1>
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button> */}

      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <NameList />
    </div>
  );
};

export default UseReduce;
