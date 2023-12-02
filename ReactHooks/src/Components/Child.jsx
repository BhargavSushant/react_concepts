import React from "react";
import { memo } from "react";
export function Child_unMemoized() {
  return (
    <>
      {console.log("Child unmemoized Component is rendered")}
      <blockquote>Child_unMemoized component , No Props , or state</blockquote>
    </>
  );
}

export const Child_Memoized = React.memo(() => {
  return (
    <>
      {console.warn("Child memoized Component is rendered")}
      <blockquote>Child_Memoized Component , No Props , or state</blockquote>
    </>
  );
});
