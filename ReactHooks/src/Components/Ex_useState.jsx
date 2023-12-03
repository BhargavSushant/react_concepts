import { useEffect, useState } from "react";
import FieldSet from "./FieldSet";
function Ex_useState() {
  const [count, setCount] = useState(0);

  return (
    <FieldSet legendText="useState hook Example">
      <h1>useState</h1>
      Count : {count}
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
    </FieldSet>
  );
}

export default Ex_useState;

// updater function should be like setXXX , not mandatory but its a convention
//
