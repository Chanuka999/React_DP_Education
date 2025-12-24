import React from "react";

const ArrayFloat = ({ names }) => {
  const newNameList = [
    ...names.slice(0, 3),
    [names[3], names[4], names.slice(5, names.length)],
  ];

  var Array1 = newNameList.flat();
  var Array2 = newNameList.flat(2);

  return (
    <div>
      <h1>Normal Array </h1>
      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(newNameList)}</td>
        </tr>
      </table>

      <h1> Array1 </h1>
      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(Array1)}</td>
        </tr>
      </table>

      <h1>Slice Array2</h1>
      <table border={1} cellPadding={5}>
        <tr>
          <td>{JSON.stringify(Array2)}</td>
        </tr>
      </table>
    </div>
  );
};

export default ArrayFloat;
