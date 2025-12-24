import React from "react";
import ListItem from "./ListItem";

const UnOrderList = ({ name }) => {
  return (
    <ul>
      <p>unOrder list</p>
      <ListItem name={name} />
    </ul>
  );
};

export default UnOrderList;
