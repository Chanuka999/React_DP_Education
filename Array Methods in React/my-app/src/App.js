import logo from "./logo.svg";
import "./App.css";
import Arraylist from "./Components/Arralist";
import ArrayFilter from "./Components/ArrayFilter";
import ArrayNumber from "./Components/ArrayNumber";
import ArrayForEach from "./Components/ArrayForEach";
import ArrayFind from "./Components/ArrayFind";
import ArrayFindIndex from "./Components/ArrayFindIndex";

function App() {
  const name = [
    "jonas",
    "martha",
    "mickel",
    "chalert",
    "hennah",
    "elisabath",
    "peter",
    "clodia",
    "adam",
    "iwa",
    "silja",
    "fransiska",
    "kathrina",
  ];

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Arraylist nameList={name} />
        <ArrayFilter nameList={name} />
        <ArrayNumber numberList={number} />
        <ArrayForEach nameList={name} />
        <ArrayFind nameList={name} numberList={number} />
        <ArrayFindIndex nameList={name} />
      </header>
    </div>
  );
}

export default App;
