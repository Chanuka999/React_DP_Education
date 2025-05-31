import React, { useContext } from "react";
import BoxC from "./BoxC";
import { NameContext } from "./BoxA";

const BoxB = ({ name }) => {
  const { theam, toggleTheme } = useContext(NameContext);

  const theameStyle = {
    backgroundColor: theam === "light" ? "#fff" : "#333",
    color: theam === "light" ? "#000" : "#fff",
  };
  return (
    <div className="box" style={theameStyle}>
      <h1>Box B</h1>
      <BoxC name={name} />
    </div>
  );
};

export default BoxB;
