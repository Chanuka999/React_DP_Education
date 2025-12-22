import React, { useState } from "react";
import Search from "./Search";
import StudentCard from "./StudentCard";

const StudentMain = () => {
  const [text, setText] = useState("");

  const StudentList = [
    { name: "chanuka", age: "23", city: "laxapana" },
    { name: "malidu", age: "21", city: "ginigathhena" },
    { name: "malinda", age: "20", city: "norton" },
    { name: "sahan", age: "29", city: "colombo" },
  ];

  const searchStudent = StudentList.filter((student) =>
    student.name.toLowerCase().includes(text.toLowerCase())
  );
  const searchHandle = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  return (
    <div className="student-list">
      <Search onSearch={searchHandle} />
      <div>
        <p>{text}</p>
      </div>
      {searchStudent.map((student, index) => {
        return (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            city={student.city}
          />
        );
      })}
    </div>
  );
};

export default StudentMain;
