import React from "react";

const ArrayFilter = ({ nameList }) => {
  const FilterName = nameList.filter((name) =>
    name.toLowerCase().startsWith("c")
  );
  return (
    <div>
      <h1>filter name in name list(c)</h1>
      <ul>
        {FilterName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayFilter;
