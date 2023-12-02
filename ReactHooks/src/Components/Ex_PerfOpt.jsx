// ! React Performance Optimization
// ~~ In React we can use React.memo, React.useCallback and React.useMemo to optimize the performance of our application
/*  In this file we will see how to perform certain optimizations in our application using React.memo, React.useCallback and React.useMemo
//* case # 1 
//* Code Structure : 
//* <Child /> component is imported in Ex_perfOpt
//* Ex_perfOpt_unOptimised is a simple component which has an increment counter, and you will see that whenever we increment the counter, the Child component is also rendered, even though it does not have any props or state.

*/
import React from "react";
import FieldSet from "./FieldSet";
import { Child_Memoized, Child_unMemoized } from "./Child";

function Ex_perfOpt_unOptimised() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <FieldSet legendText="Unoptimized Component # React Memo example">
      <h1>Ex_perfOpt.jsx</h1>
      <h2>
        This is an <u>Unoptimised Component</u>
      </h2>
      <Child_unMemoized />
      <Child_Memoized />
      <h3>Counter : {counter}</h3>
      <p>
        In console you will see that Child Component is rendered multiple times
        even though no props are being passed on to it , so this is called{" "}
        <strong>wasted render</strong>, however you will find that
        Child_Memoized is rendered only once
      </p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </FieldSet>
  );
}

function Ex_PerfOpt_memo() {
  return <div>Ex_PerfOpt_memo</div>;
}

function Ex_PerfOpt_useCallback() {
  return <div>Ex_PerfOpEx_PerfOpt_useCallbackt_memo</div>;
}

function Ex_PerfOpt_useMemo() {
  return <div>Ex_PerfOpt_useMemo</div>;
}

export {
  Ex_perfOpt_unOptimised,
  Ex_PerfOpt_memo,
  Ex_PerfOpt_useCallback,
  Ex_PerfOpt_useMemo,
};
