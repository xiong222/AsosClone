import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import withViewport from "../../Viewport/withViewport";
import styles from "./index.css";

const cx = classnames.bind(styles);

const Widget = ({ style, children, isVisible, className }) => (
  <li
    style={style}
    className={cx(styles.container, className, {
      [styles.container__hidden]: !isVisible
    })}
  >
    {children}
  </li>
);

Widget.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default withViewport(Widget);
