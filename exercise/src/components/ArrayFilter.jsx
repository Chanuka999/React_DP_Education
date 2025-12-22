import React from "react";

const ArrayFilter = ({ nameList }) => {
  const FilterName = nameList.filter((name) =>
    name.toLowerCase().startsWith("c")
  );
  return (
    <div style={{ padding: "2px", margin: "5px", border: "2px solid" }}>
      {FilterName.map((names, index) => {
        return <li key={index}>{names}</li>;
      })}
    </div>
  );
};

export default ArrayFilter;
