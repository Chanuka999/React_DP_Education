import React from "react";

const ArrayNumber = ({ numberList }) => {
  const sum = numberList.reduce((total, num) => total + num, 10);
  return (
    <div>
      <h1>Number List</h1>
      <ul>
        {numberList.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <hr />
      <p>{sum}</p>
    </div>
  );
};

export default ArrayNumber;
