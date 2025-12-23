import React from "react";
import { Link } from "react-router-dom";

const ArrayList = () => {
  return (
    <div className="nav">
      <Link to="/map">ArrayMap</Link>
      <Link to="/filter">Array Filter</Link>
      <Link to="/reduce">Array Reduce</Link>
      <Link to="/foreach">Array ForEach</Link>
      <Link to="/find">Array Find</Link>
      <Link to="/findIndex">Array FindIndex</Link>
    </div>
  );
};

export default ArrayList;
