import React from "react";

const ArrayForEach = ({ nameList }) => {
  const newnameList = [];
  nameList.forEach((name, index) => {
    newnameList.push(<li key={index}>{name}</li>);
  });
  return (
    <div>
      <h3>Name List(ForEach)</h3>
      <ul>{nameList}</ul>
    </div>
  );
};

export default ArrayForEach;
