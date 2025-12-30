import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/student">Student</Link>
      <Link to="/list">Arrays</Link>
      <Link to="/fragment">Fragment</Link>
      <Link to="/controll">ControllComponent</Link>
      <Link to="/higher">higher-order</Link>
      <Link to="/form">from</Link>
    </div>
  );
};

export default Nav;
