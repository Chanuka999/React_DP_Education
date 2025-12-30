import React, { useContext } from "react";
import { NameContext } from "./BoxA";

const BoxD = ({ name }) => {
  const { name: newName, theame, togglebtn } = useContext(NameContext);

  const toggleStyle = {
    backgroundColor: theame === "light" ? "#fff" : "#333",
    color: theame === "light" ? "#000" : "#fff",
  };
  return (
    <div className="box" style={toggleStyle}>
      <h1>Box D</h1>
      <p>name - {name}</p>
      <p>new name - {newName}</p>
      <p>theame - {theame}</p>
      <button onClick={togglebtn}>toggle</button>
    </div>
  );
};

export default BoxD;
