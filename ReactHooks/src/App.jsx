import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Concepts/Home";
import Ex_useState from "./Components/Concepts/Ex_useState";
import Ex_useEffect from "./Components/Concepts/Ex_useEffect";
import Ex_useMemo from "./Components/Concepts/Ex_useMemo";
import { Ex_perfOpt_unOptimised } from "./Components/Concepts/Ex_PerfOpt";
import "./assets/styles.css";
import Ex_useCallback from "./Components/Concepts/Ex_useCallback";
function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/Ex_useState" element={<Ex_useState />}>
          usestate
        </Route>
        <Route path="/Ex_useEffect" element={<Ex_useEffect />}>
          useEffect
        </Route>
        <Route path="/Ex_useMemo" element={<Ex_useMemo />}>
          useMemo
        </Route>
        <Route
          path="/Ex_perfOpt_unOptimised"
          element={<Ex_perfOpt_unOptimised />}
        >
          useMemo
        </Route>
        <Route path="/Ex_useCallback" element={<Ex_useCallback />}>
          use callback example
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
