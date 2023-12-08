import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import "../assets/border.css";
import FieldSet from "../../layout/FieldSet";
function Ex_useEffect(props) {
  const [count, setCount] = React.useState(0);

  useEffect(
    () => {
      // code to run
      console.log("useEffect called:", count);
      // return if any clean up is required
      return () => {
        console.log(
          "clean up, for ex: a timeout or a subscription that might be running and we want to stop it because we are unmounting the component, but if we didnt have this return statement, then the clean up code would never run and the subscription or timeout would still might be running in the background and that might cause a memory leak"
        );
      };
    },
    [count] // dependency array
  );

  return (
    <FieldSet legendText="Ex_useEffect">
      {/* <Grid> */}
      <h1>useEffect</h1>
      <row>Count : {count}</row>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      {/* </Grid> */}
    </FieldSet>
  );
}

Ex_useEffect.propTypes = {};

export default Ex_useEffect;

// useEffect :
// 1. useEffect is a hook that allows you to perform side effects in functional components
// example : fetching data from an api , setting up a subscription , changing the dom directly, etc.
// 2. useEffect is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount
