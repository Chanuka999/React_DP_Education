import React from "react";
import ArraySome from "./ArraySome";
import ArrayEvery from "./ArrayEvery";
import ArraySort from "./ArraySort";
import ArraySlice from "./ArraySlice";
import ArraySplice from "./ArraySplice";
import ArrayFloat from "./ArrayFloat";
import ArrayFlatMap from "./ArrayFlatMap";

const ArrayFindIndex = ({ nameList }) => {
  const fname = nameList.findIndex((name) => name.includes("c"));
  return (
    <div
      style={{
        padding: "2px",
        margin: "5px",
      }}
    >
      <h1>findIndex</h1>
      <table border={1} cellPadding={5}>
        {nameList.map((name, index) => (
          <tr bgcolor={index === fname ? "blue" : ""}>
            <td key={index}>{index}</td>
            <td key={index}>{name}</td>
          </tr>
        ))}
      </table>
      <hr />
      <p>{fname}</p>
      <ArraySome names={nameList} />
      <ArrayEvery names={nameList} />
      <ArraySort names={nameList} />
      <ArraySlice names={nameList} />
      <ArraySplice names={nameList} />
      <ArrayFloat names={nameList} />
      <ArrayFlatMap names={nameList} />
    </div>
  );
};

export default ArrayFindIndex;
