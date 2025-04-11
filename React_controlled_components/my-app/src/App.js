import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Searchbar from "./Components/Searchbar";
import Newbar from "./Components/Newbar";

function App() {
  const [text, setText] = useState();
  const [message, setMessage] = useState();

  const handdle = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const handdle2 = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Searchbar Search={handdle} />
        <div>
          <p>{text}</p>
        </div>
        <Newbar Search2={handdle2} />
        <div>
          <p>{message}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
