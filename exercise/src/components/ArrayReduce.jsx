import React from "react";

const ArrayReduce = ({ numberList }) => {
  const sum = numberList.reduce((total, num) => total + num, 10);
  return (
    <div style={{ padding: "2px", margin: "5px", border: "2px solid" }}>
      <ul>
        {numberList.map((names, index) => {
          return <li key={index}>{names}</li>;
        })}
      </ul>
      <p>current total =10</p>
      <p>new total is :{sum}</p>
    </div>
  );
};

export default ArrayReduce;
