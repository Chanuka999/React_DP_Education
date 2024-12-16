import React from "react";
import ReactDOM from "react-dom/client";
import StudentCard from "./Components/StudentCard";
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "MY React App"),
//     React.createElement(studentcard, {
//       name: "amal",
//       age: 32,
//       town: "hatton",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>My react App</h1>
      <StudentCard name="chanuka" age={23} town="laxapana" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
