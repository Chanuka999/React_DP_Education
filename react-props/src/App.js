import React from "react";
import ReactDOM from "react-dom";

const student = (props) => {
  return React.createElement("div", {}, [
    React.createElement("div", {}, props.name),
    React.createElement("div", {}, props.age),
    React.createElement("div", {}, props.town),
  ]);
};

const studentcard = (props) => {
  return React.createElement(
    "div",
    { className: "st-card" },
    React.createElement("img", {
      src: "",
      alt: "student_image",
      className: "student_image",
    }),
    React.createElement(student, { ...props }, null),
  );
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "MY React App"),
    React.createElement(studentcard, {
      name: "amal",
      age: 32,
      town: "hatton",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
