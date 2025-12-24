import React from "react";

const ArrayFlatMap = ({ names }) => {
  var Array1 = names.map((name) => name.split(""));
  var Array2 = names.flatMap((name) => name.split(""));

  return (
    <div>
      <h1>Normal Array </h1>
      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(names)}</td>
        </tr>
      </table>

      <h1> Array map </h1>
      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(Array1)}</td>
        </tr>
      </table>

      <h1>Array FlatMap </h1>
      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(Array2)}</td>
        </tr>
      </table>
    </div>
  );
};

export default ArrayFlatMap;
