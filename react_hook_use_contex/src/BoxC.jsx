import React from "react";
import BoxD from "./BoxD";

const BoxC = ({ name }) => {
  return (
    <div className="box">
      <h1>BoxC</h1>
      <BoxD name={name} />
    </div>
  );
};

export default BoxC;
