import React from "react";
import PropTypes from "prop-types";

const FieldSet = ({ className, legendText, children }) => (
  <fieldset className={`border ${className}`}>
    <legend className={`border ${className}`}>{legendText}</legend>
    {children}
    {console.log("Fieldset Rendered")}
  </fieldset>
);

FieldSet.propTypes = {
  className: PropTypes.string,
  legendText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FieldSet;
