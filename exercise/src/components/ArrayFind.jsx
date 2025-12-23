import React from "react";

const ArrayFind = ({ nameList, numberList }) => {
  const num = numberList.find((num) => num > 5);

  const fname = nameList.find((name) => name.includes("c"));
  return (
    <div
      style={{
        padding: "2px",
        margin: "5px",
        border: "2px solid",
      }}
    >
      {numberList.map((number, index) => {
        return <li key={index}>{number}</li>;
      })}
      <hr />
      <p>{num}</p>

      <br />

      <hr />

      {nameList.map((name, index) => {
        return <li key={index}>{name}</li>;
      })}
      <hr />
      <p>{fname}</p>
    </div>
  );
};

export default ArrayFind;
