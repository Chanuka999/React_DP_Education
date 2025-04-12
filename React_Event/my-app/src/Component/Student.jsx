import React, { useState } from "react";
import "./Hello.css";

const Student = ({ name, age, town }) => {
  const [newAge, setNewAge] = useState(age);

  const weelChange = (event) => {
    console.log(event.deltaY);
    if (event.deltaY > 0) {
      console.log("Mouse scrol is to down");
      setNewAge(newAge - 1);
    } else {
      console.log("Mouse scroll is up");
      setNewAge(newAge + 1);
    }
  };
  return (
    <div className="student-card">
      <ul>
        <li>{name}</li>
        <li onWheel={weelChange}>{newAge}</li>
        <li>{town}</li>
      </ul>
    </div>
  );
};

export default Student;
