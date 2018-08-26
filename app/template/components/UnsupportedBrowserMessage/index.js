import React, { Component } from "react";
import PropTypes from "prop-types";
import withTranslation from "../translation";
import styles from "./index.css";

export class UnsupportedBrowserMessage extends Component {
  render() {
    const { formatTranslation } = this.props;
    return (
      <div
        className={styles.container}
        data-testid="unsupported-browser-message"
      >
        <div className={styles.content}>
          <div className={styles.message}>
            <div className={styles.header}>
              {formatTranslation("UnsupportedBrowserMessage.Header")}
            </div>
            <div className={styles.details}>
              {formatTranslation("UnsupportedBrowserMessage.Details")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UnsupportedBrowserMessage.propTypes = {
  formatTranslation: PropTypes.func
};

export default withTranslation(UnsupportedBrowserMessage);
