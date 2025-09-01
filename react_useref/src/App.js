import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Reffs from "./Reffs";

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef(0);

  useEffect(() => {
    console.log("app renderd");
  });

  const handdleClick = () => {
    //setCount(count + 1);
    ref.current++;
    console.log(ref.current);
    if (ref.current > 3) {
      setCount(count + 1);
      ref.current = 1;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <Reffs />
        <img src={logo} className="App-logo" alt="logo" />
        <p>count -{count}</p>
        <p>count(Ref) - {ref.current}</p>
        <button onClick={handdleClick}>
          <h2>_+_</h2>
        </button>
      </header>
    </div>
  );
}

export default App;
