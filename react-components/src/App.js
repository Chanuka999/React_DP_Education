import React from "react";
import ReactDOM from "react-dom";

const student = () => {
  return React.createElement("div", {}, [
    React.createElement("div", {}, "chanuka"),
    React.createElement("div", {}, 23),
    React.createElement("div", {}, "colombo "),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "MY React App"),
    React.createElement(student),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
