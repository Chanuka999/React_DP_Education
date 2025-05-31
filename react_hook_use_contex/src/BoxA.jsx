import React, { createContext, useState } from "react";
import BoxB from "./BoxB";

export const NameContext = createContext();

const BoxA = () => {
  const [name, setName] = useState("React");
  const [theam, setTheam] = useState("light");

  const toggleTheme = () => {
    setTheam((prevTheam) => (prevTheam === "light" ? "dark" : "light"));
  };
  return (
    <div className="box">
      <h1>Box A</h1>
      <p> {name}</p>
      <NameContext.Provider value={{ name, theam, toggleTheme }}>
        <BoxB name={name} />
      </NameContext.Provider>
    </div>
  );
};

export default BoxA;
