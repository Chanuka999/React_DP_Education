import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>react bootstrap ui component</h1>
        <br />

        <h2>
          <Button>text</Button>
        </h2>
      </header>
    </div>
  );
}

export default App;
