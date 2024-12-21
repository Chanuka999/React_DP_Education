import logo from "./logo.svg";
import "./App.css";
import OrderdListItem from "./Components/OrderdListItem";

function App() {
  const nameList = [
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
        <OrderdListItem itemList={nameList} />
      </header>
    </div>
  );
}

export default App;
