// Layout.jsx
import React from "react";
import PropTypes from "prop-types";
import FieldSet from "./FieldSet";
import "../assets/layout.css";
import "../assets/fieldset.css";
const Layout = ({ className, children, code, output, notes, legendText }) => {
  return (
    <FieldSet legendText={legendText} className={className}>
      <div className="section">
        <h2>Code</h2>
        <pre>{code}</pre>
      </div>

      <div className="section">
        <h2>Component Output</h2>
        {output}
      </div>

      <div className="section">
        <h2>Notes</h2>
        {notes}
      </div>

      {children}
    </FieldSet>
  );
};
Layout.propTypes = {
  code: PropTypes.string.isRequired,
  output: PropTypes.node.isRequired,
  notes: PropTypes.node.isRequired,
  legendText: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Layout;
