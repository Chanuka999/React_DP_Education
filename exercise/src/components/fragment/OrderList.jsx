import React from "react";
import ListItem from "./ListItem";

const OrderList = ({ name }) => {
  return (
    <ol>
      <p>order list</p>
      <ListItem name={name} />
    </ol>
  );
};

export default OrderList;
