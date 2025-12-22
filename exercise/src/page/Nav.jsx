import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/student">Student</Link>
      <Link to="/list">Arrays</Link>
    </div>
  );
};

export default Nav;
