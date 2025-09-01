import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "./LocalStorage";
import useClock from "./Clock";

function App() {
  //localStorage.setItem("key_name", "chanuka123");
  //const name = localStorage.getItem("key_name");

  const [name, setName] = useLocalStorage("name_id", "Chanuka");

  const inputHanddle = (e) => {
    setName(e.target.value);
  };

  const time = useClock();
  //console.log(time);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{time.toLocaleTimeString()}</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name = {name}</p>
        <input type="text" onChange={inputHanddle} />
      </header>
    </div>
  );
}

export default App;
