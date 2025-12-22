import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import StudentMain from "./components/StudentMain";
import ArrayMap from "./components/ArrayMap";
import Nav from "./page/nav";
import ArrayList from "./page/ArrayList";
import ArrayFilter from "./components/ArrayFilter";

function App() {
  const nameList = [
    "chanuka",
    "alice",
    "pawan",
    "goue",
    "sora",
    "buha",
    "maichel",
    "martha",
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/student" element={<StudentMain />} />
        <Route path="/list" element={<ArrayList />} />
      </Routes>

      <Routes path="/list">
        <Route path="/map" element={<ArrayMap nameList={nameList} />} />
        <Route path="/filter" element={<ArrayFilter nameList={nameList} />} />
      </Routes>
    </>
  );
}

export default App;
