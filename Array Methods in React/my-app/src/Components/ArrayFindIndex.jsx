import React from "react";

const ArrayFindIndex = ({ nameList }) => {
  const nameIndex = nameList.findIndex((name, index) => name.includes("r"));
  return (
    <div>
      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr bgcolor={index === nameIndex ? "blue" : ""}>
            <td key={index}>{index}</td>
            <td key={name}>{name}</td>
          </tr>
        ))}
      </table>
      <hr />
      <p>{nameIndex}</p>
    </div>
  );
};

export default ArrayFindIndex;
