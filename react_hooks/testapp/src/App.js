import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
//import { useState } from "react";

function App() {
  // var x = 0;

  // const [count, setCount] = useState(0);

  // const counter = () => {
  //   x = x + 1;
  //   console.log(x);
  //   setCount(count + 1);
  // };

  // const reduce = () => {
  //   setCount(count - 1);
  // };
  const [count, setCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);
  useEffect(() => {
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 1000);
    // setCount(count + 1);
    console.log("useEffered Triggerd");
    return () => {
      console.log("cleanup");
    };
  }, [count]);

  const counter = () => {
    setCount(count + 1);
    if ((count + 1) % 5 === 0) {
      setLastCount(lastCount + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{x}</p>
        <p>{`value of x - ${count}`}</p>
        <button onClick={counter}>Click +</button>
        <button onClick={reduce}>Click -</button> */}
        <p>UseEffect</p>
        <p>{count}</p>
        <button onClick={counter}>Click</button>
        <p>last count value-{lastCount}</p>
      </header>
    </div>
  );
}

export default App;
