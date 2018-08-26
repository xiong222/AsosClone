import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import IconButton from "../IconButton";

import styles from "./index.css";

class Notification extends Component {
  render() {
    const ariaLiveForType = {
      alert: "assertive",
      error: "assertive",
      promotion: "polite",
      success: "polite"
    };

    const { children, hasIcon, type, onClose, closeLabel } = this.props;

    return (
      <div
        aria-live={ariaLiveForType[type]}
        className={classnames({
          [styles.notification]: true,
          [styles[type]]: true,
          [styles.hasBackground]: true,
          [styles.hasIcon]: hasIcon
        })}
      >
        <div className={styles.text}>{children}</div>
        {onClose && (
          <IconButton
            icon="close"
            className={styles.close}
            data-testid="notification-close-btn"
            size="small"
            onClick={onClose}
            aria-label={closeLabel ? closeLabel : "Dismiss this message"}
          />
        )}
      </div>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  hasIcon: PropTypes.bool,
  type: PropTypes.oneOf(["alert", "error", "promotion", "success"]).isRequired,
  onClose: PropTypes.func,
  closeLabel: PropTypes.string
};

Notification.defaultProps = {
  hasIcon: true
};

export default Notification;
