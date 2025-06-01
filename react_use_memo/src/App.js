import { useMemo, useState } from "react";
import "./App.css";

const numberList = new Array(25000000).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 20000000,
  };
});
//console.log(newnumberList);

function App() {
  // var numberList = new Array(10000);
  // numberList.fill(0);
  // console.log(numberList);
  const [newNumberList] = useState(numberList);

  const [count, setCount] = useState(0);

  const selectedItem = useMemo(
    () =>
      newNumberList.find((number) => {
        return number.isSelected;
      }),
    [newNumberList]
  );

  // const newnumberList = numberList.map((_, index) => {
  //   return {
  //     id: index,
  //     isSelected: index === 999999,
  //   };
  // });
  // console.log(newnumberList);

  return (
    <div className="App">
      <h3>Count - {count}</h3>
      <p>selected Item - {selectedItem.id}</p>
      <button onClick={() => setCount(count + 1)}>
        <h3>" + "</h3>
      </button>
    </div>
  );
}

export default App;
