import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/Ex_useState">useState</Link>
      <br />
      <Link to="/Ex_useEffect">useEffect</Link>
      <br />
      <Link to="/Ex_useMemo">useMemo</Link>
      <br />
      <Link to="/Ex_perfOpt_unOptimised">unoptimised_nomemo</Link>
      <br />
      <Link to="/Ex_useCallback">use callback example</Link>
    </div>
  );
}

export default Home;
