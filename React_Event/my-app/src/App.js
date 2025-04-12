import "./App.css";
import React, { useState } from "react";

import StudentCrad from "./Component/StudentCrad";
import SearchBar from "./Component/SearchBar";

const App = () => {
  const [test, setTest] = useState("");

  const changeSearch = (event) => {
    //console.log(event.target.value);
    setTest(event.target.value);
  };
  const studentList = [
    { name: "chanuka", age: "23", town: "laxapana" },
    { name: "kamal", age: "21", town: "colombo" },
    { name: "Nimal", age: "24", town: "ginigathhena" },
  ];

  const searchStudent = studentList.filter((student) =>
    student.name.toLowerCase().includes(test.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar search={changeSearch} />
        <p>{test}</p>
        {searchStudent.map((student, index) => {
          return (
            <StudentCrad
              key={index}
              name={student.name}
              age={student.age}
              town={student.town}
            />
          );
        })}
      </header>
    </div>
  );
};

export default App;
