import React from "react";

const Student = ({ name, age, city }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
};

export default Student;
