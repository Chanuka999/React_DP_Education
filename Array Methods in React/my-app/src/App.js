import logo from "./logo.svg";
import "./App.css";
import Arraylist from "./Components/Arralist";

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Arraylist nameList={name} />
      </header>
    </div>
  );
}

export default App;