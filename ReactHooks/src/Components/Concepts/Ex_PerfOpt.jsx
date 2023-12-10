// ! React Performance Optimization
// ~~ In React we can use React.memo, React.useCallback and React.useMemo to optimize the performance of our application
/*  In this file we will see how to perform certain optimizations in our application using React.memo, React.useCallback and React.useMemo
//* case # 1 
//* Code Structure : 
//* <Child /> component is imported in Ex_perfOpt
//* Ex_perfOpt_unOptimised is a simple component which has an increment counter, and you will see that whenever we increment the counter, the Child component is also rendered, even though it does not have any props or state.

*/
import React from "react";
import Layout from "../../layout/Layout";
import { Child_Memoized, Child_unMemoized } from "./Child";
import parse from "html-react-parser";

function Ex_perfOpt_unOptimised() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => {
    /* 
    * note 1 : example of closure here,  The incrementCounter function "closes over" the counter variable from the outer scope, capturing its value at the time the function is created.
    ~ note 2 : every time the parent component is getting rerendered the child is getting rerendered as well, apart from that the function setCounter is getting reinstantiated again because The incrementCounter function is recreated every time the component re-renders. This is a common pattern in functional components. React's functional components often create new functions on each render, and this is considered normal behavior. React leverages this behavior to optimize performance. When you define a function within a functional component, it has access to the current state and props. React is aware that this function is a new reference each time the component renders, and it efficiently manages the subscription and unsubscription of event handlers. This behavior is related to how closures work in JavaScript. The incrementCounter function "closes over" the counter variable from the outer scope, capturing its value at the time the function is created. If you want to memoize the function itself to prevent unnecessary re-creation on each render, you can use the useCallback hook. 
    */
    setCounter(counter + 1);
    console.log("incrementCounter()=>", incrementCounter);
  };
  const [legendText, componentCode, componentOutput, notes] = [
    "Unoptimized Component # React Memo example",
    "",
    "",
    parse(
      "<h4>React Performance Optimization</h4> \
     In React we can use <strong> React.memo, React.useCallback and React.useMemo </strong> to optimize the performance of our application \
     In this file we will see how to perform certain optimizations in our application using React.memo, React.useCallback and React.useMemo \
     <h5>case # 1 </h5> \
     Code Structure : \
     <code> Child_unMemoized & Child_Memoized component is imported in Ex_perfOpt </code> \
     <p> Ex_perfOpt_unOptimised is a simple component which has an increment counter, and you will see that whenever we increment the counter, the Child component is also rendered, even though it does not have any props or state.</p>"
    ),
  ];
  return (
    <Layout
      code={componentCode}
      output={componentOutput}
      notes={notes}
      legendText={legendText}
    >
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
    </Layout>
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
