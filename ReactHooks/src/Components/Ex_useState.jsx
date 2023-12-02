import { useEffect, useState } from "react";
function Ex_useState() {
  const [count, setCount] = useState(0);

  return (
    <div>
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
    </div>
  );
}

export default Ex_useState;

// updater function should be like setXXX , not mandatory but its a convention
//
