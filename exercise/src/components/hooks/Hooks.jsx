import React from "react";
import { Link } from "react-router-dom";

const Hooks = () => {
  return (
    <div>
      <h1>react hooks</h1>
      <ul>
        <li>
          <Link to="/useState">useSatate</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/useContext">useContext</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hooks;
