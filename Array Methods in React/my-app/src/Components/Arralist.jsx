import React from "react";

const Arraylist = ({ nameList }) => {
  return (
    <div>
      <h1>Dark TV serias charactor</h1>
      <ul>
        {nameList.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Arraylist;
