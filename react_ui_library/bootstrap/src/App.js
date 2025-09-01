import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Button } from "react-bootstrap";
//import CardComponent from "./components/CardComponent";
import Cards from "./components/Cards";
import TableComponets from "./components/TableComponents";
import ModalComponents from "./components/ModalComponents";
import CarousalComponent from "./components/CarousalComponent";
import OffCanvasComponent from "./components/OffCanvasComponent";
import TabComponent from "./components/TabComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ paddingBottom: "300px" }}>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="w-50 mt-5">
          <h2>Cards</h2>
          <Cards />
        </div>

        <div className="w-50 mt-5">
          <h2>Table</h2>
          <TableComponets />
        </div>

        <div className="w-50 mt-5">
          <h2>Modals</h2>
          <ModalComponents />
        </div>

        <div className="w-50 mt-5">
          <h2>CarousalComponents</h2>
          <CarousalComponent />
        </div>

        <div className="w-50 mt-5">
          <h2>OffCanvasComponent</h2>
          <OffCanvasComponent />
        </div>

        <div className="w-50 mt-5">
          <h2>TabComponent</h2>
          <TabComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
