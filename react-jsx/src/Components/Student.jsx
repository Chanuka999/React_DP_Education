import React from "react";

const Student = ({ name, age, town }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{town}</h3>
    </div>
  );
};

export default Student;
