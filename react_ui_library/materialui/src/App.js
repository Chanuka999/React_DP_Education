import logo from "./logo.svg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import { Button } from "@mui/material";

import Cards from "./components/Cards";
import DialogContent from "./components/DialogComponent";
import AccordianComponent from "./components/AccordianComponent";
import DrawerComponent from "./components/DrawerComponent";
import TabComponent from "./components/TabComponent";
import DateFns from "./components/DateFns";
import LoginForm from "./components/LoginForm";
import Gsap from "./components/Gsap";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ paddingBottom: "300px" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Cards</h2>
        <Cards />

        <h2>Dialogs</h2>
        <DialogContent />

        <h2>Accordian Component</h2>
        <AccordianComponent />

        <h2>Drawer Component</h2>
        <DrawerComponent />

        <h2>Tabs</h2>
        <TabComponent />

        <h2>Date-Fns</h2>
        <DateFns />

        <h2>Login Form</h2>
        <LoginForm />

        <Gsap />
      </header>
    </div>
  );
}

export default App;
