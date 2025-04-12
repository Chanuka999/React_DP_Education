import React from "react";
import Student from "./Student";

const StudentCrad = ({ name, age, town }) => {
  return (
    <div>
      <Student name={name} age={age} town={town} />
    </div>
  );
};

export default StudentCrad;
