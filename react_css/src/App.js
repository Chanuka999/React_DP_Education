import logo from "./logo.svg";
import "./App.css";
import NormalCss from "./NormalCss";
import CssModule from "./CssModule";
import AdvancedCss from "./AdvancedCss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <NormalCss />
        <br />
        <CssModule /> */}
        <AdvancedCss />
      </header>
    </div>
  );
}

export default App;
