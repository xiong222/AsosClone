import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./index.css";

const Spinner = ({ size, position }) => (
  <div className={classnames(styles.spinner, styles[size], styles[position])} />
);

Spinner.defaultProps = {
  size: "small",
  position: "default"
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "x-large"]),
  position: PropTypes.oneOf(["default", "centre"])
};

export default Spinner;
