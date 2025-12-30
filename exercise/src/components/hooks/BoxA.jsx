import React, { createContext, useState } from "react";
import BoxB from "./BoxB";

export const NameContext = createContext();

const BoxA = () => {
  const [name, setName] = useState("react");
  const [theame, setTheame] = useState("light");

  const togglebtn = () => {
    setTheame(theame == "light" ? "dark" : "light");
  };
  return (
    <div className="box">
      <h1>Box A</h1>
      <p>name - {name}</p>
      <NameContext.Provider value={{ name, theame, togglebtn }}>
        <BoxB name={name} />
      </NameContext.Provider>
    </div>
  );
};

export default BoxA;
