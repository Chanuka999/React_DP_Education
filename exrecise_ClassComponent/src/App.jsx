import { Component } from "react";
import "./App.css";
import Student from "./Student";
import Search from "./Search";
import StudentCard from "./StudentCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  searchHandle = (event) => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;
    const StudentList = [
      { name: "chanuka", age: "23", city: "laxapana" },
      { name: "malidu", age: "21", city: "ginigathhena" },
      { name: "malinda", age: "20", city: "norton" },
      { name: "sahan", age: "29", city: "colombo" },
    ];

    const searchStudent = StudentList.filter((student) =>
      student.name.toLowerCase().includes(text.toLowerCase())
    );

    return (
      <div className="student-list">
        <Search onSearch={this.searchHandle} searchValue={text} />
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
  }
}

export default App;
