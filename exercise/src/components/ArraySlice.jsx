import React from "react";

const ArraySlice = ({ names }) => {
  const Array1 = names.slice(2, 5);
  const Array2 = names.slice(3, names.length);
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

      <h1>Slice Array </h1>
      <table border={1} cellPadding={5}>
        {Array1.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <h1>Slice Array2</h1>
      <table border={1} cellPadding={5}>
        {Array2.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ArraySlice;
