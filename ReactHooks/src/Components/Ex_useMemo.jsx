import React from "react";
import { usestate, useMemo } from "react";
import "../assets/border.css";
import FieldSet from "./FieldSet";
function Ex_useMemo() {
  return <FieldSet legendText="Ex_useMemo">Example useMemo</FieldSet>;
}
export default Ex_useMemo;
// useMemo :
// 1. useMemo is a hook that memorizes the output of a function
// 2. useMemo is similar to useCallback, but useCallback returns a memoized callback and useMemo returns a memoized value
// 3. useMemo is a close replacement for React.memo
// 4. useMemo is used for performance optimization
// 5. useMemo is used to memoize a function's return value
