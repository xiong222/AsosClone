import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";

import styles from "./index.css";

const cx = classnames.bind(styles);

const TransitionList = ({ children, itemDeletedLabel, onTransitionEnd }) => {
  return (
    <ul className={styles.transitionList}>
      {children.map(child => {
        const classes = cx("transitionList__element", {
          "transitionList__element--exiting":
            child.props.transition === "exiting"
        });

        return (
          <li key={child.key} className={styles.wrapper}>
            <div
              className={classes}
              onTransitionEnd={e => {
                if (e.nativeEvent.propertyName === "height") {
                  onTransitionEnd(child.props.id);
                }
              }}
            >
              <div className={styles.transitionList_itemDeletedLabel}>
                {itemDeletedLabel}
              </div>
              {child}
              <div className={styles.transitionList__overlay} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

TransitionList.propTypes = {
  children: PropTypes.node.isRequired,
  itemDeletedLabel: PropTypes.string,
  onTransitionEnd: PropTypes.func
};

export default TransitionList;
