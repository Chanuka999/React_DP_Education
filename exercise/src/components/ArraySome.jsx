import React from "react";

const ArraySome = ({ names }) => {
  const letter = "a";

  const status = names.some((name) => name.includes(letter));
  return (
    <div>
      <h1>Array some</h1>
      <table border={1} cellPadding={5}>
        {names.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
      <p>{status ? "Yes" : "No"}</p>
    </div>
  );
};

export default ArraySome;
