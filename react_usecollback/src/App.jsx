import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import NameList from "./NameList";

const names = [
  { id: 0, name: "chanuka" },
  { id: 1, name: "randitha" },
  { id: 2, name: "kamal" },
  { id: 3, name: "saman" },
];

function App() {
  const [count, setCount] = useState(0);
  const [reversCount, setReversCount] = useState(100);

  // const getNames = () => {
  //   return names[count];
  // };

  const getNames = useCallback(() => {
    return names[count];
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>Count -{count}</h3>
          <button onClick={() => setCount(count + 1)}>
            <h3>_+_</h3>
          </button>
          <NameList getNames={getNames} />
          <p>Reverse count-{reversCount}</p>
          <button onClick={() => setReversCount(reversCount - 1)}>
            <h3>_-_</h3>
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
