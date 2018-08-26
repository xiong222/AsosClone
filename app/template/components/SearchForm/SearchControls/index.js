import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import withViewport from "../../Viewport/withViewport";
import styles from "./index.css";

const cx = classnames.bind(styles);

const SearchControls = ({ children, isVisible }) => (
  <div
    className={cx(styles.container, { [styles.container__hidden]: !isVisible })}
  >
    {children}
  </div>
);

SearchControls.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool
};

export default withViewport(SearchControls);
