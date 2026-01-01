import React from "react";
import { Link } from "react-router-dom";

const Hooks = () => {
  return (
    <div>
      <h1>react hooks</h1>

      <div>
        <Link to="/useState">useSatate</Link>
      </div>
      <div>
        <Link to="/useEffect">useEffect</Link>
      </div>
      <div>
        <Link to="/useContext">useContext</Link>
      </div>
      <div>
        <Link to="/useReduce">useReduce</Link>
      </div>
      <div>
        <Link to="/useMemo">useMemo</Link>
      </div>
    </div>
  );
};

export default Hooks;
