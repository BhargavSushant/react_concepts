import React from "react";
// import Child from "./Child";
import Layout from "../../layout/Layout";

function Ex_useCallback() {
  const [legendText, componentCode, componentOutput, notes] = [
    "Use Callback Example",
    "",
    "",
    "",
  ];
  return (
    <Layout
      code={componentCode}
      output={componentOutput}
      notes={notes}
      legendText={legendText}
    >
      <div>
        <h1>useCallback Example</h1>
      </div>
    </Layout>
  );
}

export default Ex_useCallback;
