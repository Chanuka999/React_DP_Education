//import { useState } from "react";
import { Component } from "react";
import "./App.css";
import StudentCard from "./Component/StudentCard";
import Search from "./Component/Search";
//import Search from "./Component/Search";
//import StudentCard from "./Component/StudentCard";

// function App() {
//   const [text, setText] = useState("");
//   const onSearch1 = (event) => {
//     console.log(event.target.value);
//     setText(event.target.value);
//   };

//   const studentList = [
//     { name: "chanuka", age: "23", town: "laxapana" },
//     { name: "kamal", age: "21", town: "colombo" },
//     { name: "Nimal", age: "24", town: "ginigathhena" },
//   ];

//   const searchName = studentList.filter((student) =>
//     student.name.toLowerCase().includes(text.toLowerCase())
//   );
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <Search search1={onSearch1} />
//       <p>{text}</p>
//       {searchName.map((student, index) => {
//         return (
//           <StudentCard
//             key={index}
//             name={student.name}
//             age={student.age}
//             town={student.town}
//           />
//         );
//       })}
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  onsearch1 = (event) => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  render() {
    const studentList = [
      { name: "chanuka", age: "23", town: "laxapana" },
      { name: "kamal", age: "21", town: "colombo" },
      { name: "Nimal", age: "24", town: "ginigathhena" },
    ];
    const searchName = studentList.filter((student) =>
      student.name.toLowerCase().includes(this.state.text.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Hello</h1>
        <Search search1={this.onsearch1} />
        <p>{this.state.text}</p>
        {searchName.map((student, index) => {
          return (
            <StudentCard
              key={index}
              name={student.name}
              age={student.age}
              town={student.town}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
