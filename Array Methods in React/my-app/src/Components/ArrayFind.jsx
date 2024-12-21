import React from "react";

const ArrayFind = ({ numberList, nameList }) => {
  const max = numberList.find((num) => num > 5);
  const name = nameList.find((name) => name.includes("r"));
  return (
    <div>
      <h1>first Number ( geater 5)</h1>
      <table border={1} cellPadding={5}>
        <tr>
          {numberList.map((num, index) => (
            <td align="center" key={index}>
              {num}
            </td>
          ))}
        </tr>
      </table>
      <hr />
      <p>{max}</p>
      <h1>first Name include letter "r"</h1>
      <table border={1} cellPadding={5}>
        <tr>
          {nameList.map((name, index) => (
            <td align="center" key={index}>
              {name}
            </td>
          ))}
        </tr>
      </table>
      <hr />
      <p>{name}</p>
    </div>
  );
};
export default ArrayFind;
