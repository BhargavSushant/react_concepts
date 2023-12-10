import { useEffect, useState } from "react";
// import FieldSet from "../../layout/FieldSet";
import Layout from "../../layout/Layout";
const Ex_useState = () => {
  const legendText = "Use State Example";
  const [count, setCount] = useState(0);

  const componentCode = `const [count, setCount] = useState(0)`;
  const componentOutput = (
    <>
      {" "}
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
    </>
  );
  const notes = (
    <div>
      <p>
        This example demonstrates the usage of the useState hook to manage
        state.
      </p>
    </div>
  );

  return (
    <Layout
      code={componentCode}
      output={componentOutput}
      notes={notes}
      legendText={legendText}
    >
      <div>
        <h1>useState Example</h1>
        {/* Additional content specific to this component */}
      </div>
    </Layout>
  );
};

export default Ex_useState;

// updater function should be like setXXX , not mandatory but its a convention
//
