import React from "react";
import { Link } from "react-router-dom";

const ArrayList = () => {
  return (
    <div className="nav">
      <Link to="/map">ArrayMap</Link>
      <Link to="/filter">Array Filter</Link>
    </div>
  );
};

export default ArrayList;
