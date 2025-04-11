import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(20);
  let x = 10;
  const haddleChange = (event) => {
    console.log(event.target.value);
    x = event.target.value;
    console.log(x);

    setText(event.target.value);
  };
  return (
    <div className="App">
      <input type="text" id="text" onChange={haddleChange}></input>
      <div>
        <p id="text">{text}</p>
      </div>
    </div>
  );
}

export default App;
