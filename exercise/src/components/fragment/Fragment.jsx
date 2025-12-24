import React from "react";
import OrderList from "./OrderList";
import UnOrderList from "./UnOrderList";

const Fragment = ({ nameList }) => {
  return (
    <div>
      <OrderList name={nameList} />
      <UnOrderList name={nameList} />
    </div>
  );
};

export default Fragment;
