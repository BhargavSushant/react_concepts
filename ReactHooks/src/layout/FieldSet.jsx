import React from "react";
import PropTypes from "prop-types";
import { memo } from "react";

import "../assets/fieldset.css";

const FieldSet = ({ className, legendText, children }) => (
  <fieldset className={`fieldset ${className}`}>
    <legend className={`fieldset ${className}`}>{legendText}</legend>
    {children}
    {console.log("Fieldset Rendered")}
  </fieldset>
);

FieldSet.propTypes = {
  className: PropTypes.string,
  legendText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default React.memo(FieldSet);
