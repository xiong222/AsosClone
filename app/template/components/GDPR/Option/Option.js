import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./Option.css";

const cx = classnames.bind(styles);

const Option = ({ name, isSelected, src }) => (
  <li
    className={cx("container", {
      optedOut: !isSelected
    })}
  >
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
    <span className={styles.name}>{name}</span>
  </li>
);

Option.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  src: PropTypes.string
};

export default Option;
