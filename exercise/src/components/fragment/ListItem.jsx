import React from "react";

const ListItem = ({ name }) => {
  return (
    <>
      {name.map((fname, index) => (
        <li key={index}>{fname}</li>
      ))}
    </>
  );
};

export default ListItem;
