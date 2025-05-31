import React, { useContext } from "react";
import { NameContext } from "./BoxA";

const BoxD = ({ name }) => {
  const { name: newName, theam, toggleTheme } = useContext(NameContext);

  const theameStyle = {
    backgroundColor: theam === "light" ? "#fff" : "#333",
    color: theam === "light" ? "#000" : "#fff",
  };
  return (
    <div className="box" style={theameStyle}>
      <h1>BoxD</h1>
      <p>{name}</p>
      <p>New name - {newName}</p>
      <p>current Theam - {theam}</p>
      <button onClick={toggleTheme}>toggle theam</button>
    </div>
  );
};

export default BoxD;
