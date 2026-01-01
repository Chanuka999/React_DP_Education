import React, { useState } from "react";

const numberList = new Array(100000).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 99999,
  };
});

console.log(numberList);

const UseMemo = () => {
  //   var nameList = new Array(100000);
  //   nameList.fill(0);
  //   console.log(nameList);

  const [newNumberList] = useState(numberList);
  const [count, setCount] = useState(0);

  const selectedItem = newNumberList.find((number) => {
    return number.isSelected;
  });

  //   const newNumberList = nameList.map((_, index) => {
  //     return {
  //       id: index,
  //       isSelected: index === 99999,
  //     };
  //   });

  //   console.log(newNumberList);

  return (
    <div>
      <h1>use memo</h1>
      <p>count - {count}</p>
      <p>selected item - {selectedItem.id}</p>
      <button onClick={() => setCount(count + 1)}>
        <h3>"+"</h3>
      </button>
    </div>
  );
};

export default UseMemo;
