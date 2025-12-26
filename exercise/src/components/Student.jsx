import React, { useState } from "react";

const Student = ({ name, age, city }) => {
  const [newAge, setNewAge] = useState(age);

  const handleWheel = (event) => {
    console.log(event.deltaY);
    if (event.deltaY > 0) {
      console.log("move to down");
      setNewAge(newAge + 1);
    } else {
      console.log("move to up");
      setNewAge(newAge - 1);
    }
  };

  return (
    <div>
      <p>{name}</p>
      <p onWheel={handleWheel}>{newAge}</p>
      <p>{city}</p>
    </div>
  );
};

export default Student;
