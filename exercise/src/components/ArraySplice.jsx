import React from "react";

const ArraySplice = ({ names }) => {
  const Array1 = [...names];
  const Array2 = [...names];

  Array1.splice(3, 0, "between pawan and gueo");
  Array2.splice(3, 2, "remove gueo and sora");
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

export default ArraySplice;
