import React, { useContext } from "react";
import BoxC from "./BoxC";
import { NameContext } from "./BoxA";

const BoxB = ({ name }) => {
  const { theame } = useContext(NameContext);

  const toggleStyle = {
    backgroundColor: theame == "light" ? "#fff" : "#333",
    color: theame == "light" ? "#000" : "#fff",
  };
  return (
    <div className="box" style={toggleStyle}>
      <h1>Box B</h1>

      <BoxC name={name} />
    </div>
  );
};

export default BoxB;
