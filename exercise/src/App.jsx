import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import StudentMain from "./components/StudentMain";
import ArrayMap from "./components/ArrayMap";
import Nav from "./page/nav";
import ArrayList from "./page/ArrayList";
import ArrayFilter from "./components/ArrayFilter";
import ArrayReduce from "./components/ArrayReduce";
import ArrayForEach from "./components/ArrayForEach";
import ArrayFind from "./components/ArrayFind";
import ArrayFindIndex from "./components/ArrayFindIndex";
import Fragment from "./components/fragment/Fragment";
import Controll from "./components/controll/controll";
import Higher from "./components/higherOrder.jsx/higher";
import Form from "./components/forms/Form";

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

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/student" element={<StudentMain />} />
        <Route path="/list" element={<ArrayList />} />
        <Route path="/fragment" element={<Fragment nameList={nameList} />} />
        <Route path="/controll" element={<Controll />} />
        <Route path="/higher" element={<Higher />} />
        <Route path="/form" element={<Form />} />
      </Routes>

      <Routes path="/list">
        <Route path="/map" element={<ArrayMap nameList={nameList} />} />
        <Route path="/filter" element={<ArrayFilter nameList={nameList} />} />
        <Route path="/reduce" element={<ArrayReduce numberList={numbers} />} />
        <Route path="/foreach" element={<ArrayForEach nameList={nameList} />} />
        <Route
          path="/find"
          element={<ArrayFind nameList={nameList} numberList={numbers} />}
        />
        <Route
          path="/findIndex"
          element={<ArrayFindIndex nameList={nameList} />}
        />
      </Routes>
    </>
  );
}

export default App;
