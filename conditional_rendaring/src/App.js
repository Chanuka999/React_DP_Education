import "./App.css";
import { useState } from "react";
import IfBox from "./IfBox";
import TernaryBox from "./TernaryBox";
import LogicalBox from "./LogicalBox";
import FunctionBox from "./FunctionBox";
import SwitchBox from "./SwitchBox";
import Classbox from "./ClassBox";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);

  const logout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>conditional statement</h1>
        <button onClick={() => setIsLogged(isLogged ? false : true)}>
          {isLogged ? "logout" : "login"}
        </button>
        <div className="box-container">
          <IfBox isLogged={isLogged} />
          <TernaryBox isLogged={isLogged} />
          <LogicalBox isLogged={isLogged} />
          <FunctionBox isLogged={isLogged} />
          <SwitchBox isLogged={isLogged} />
          <Classbox isLogged={isLogged} logout={logout} />
        </div>
      </header>
    </div>
  );
}

export default App;
