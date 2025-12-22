import React from "react";

const ArrayMap = ({ nameList }) => {
  return (
    <div style={{ padding: "2px", margin: "5px", border: "2px solid" }}>
      {nameList.map((names, index) => {
        return <li key={index}>{names}</li>;
      })}
    </div>
  );
};

export default ArrayMap;
