import React from "react";

const ArrayForEach = ({ nameList }) => {
  const newArray = [];
  nameList.forEach((names, index) => {
    newArray.push(<li key={index}>{names}</li>);
  });
  return (
    <div style={{ padding: "2px", margin: "5px", border: "2px solid" }}>
      {newArray}
    </div>
  );
};

export default ArrayForEach;
