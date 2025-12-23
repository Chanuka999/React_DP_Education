import React from "react";

const ArraySort = ({ names }) => {
  const sortArray = [...names].sort((a, b) => b.localeCompare(a));
  return (
    <div>
      <h1>Normal Array </h1>
      <table border={1} cellPadding={5}>
        {names.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <h1>Sort Array </h1>
      <table border={1} cellPadding={5}>
        {sortArray.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ArraySort;
