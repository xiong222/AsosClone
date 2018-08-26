import React from "react";
import PropTypes from "prop-types";
import withTranslation from "../../translation";
import styles from "./index.css";

const MinibagHeader = ({ totalQuantity, formatTranslation }) => (
  <div data-test-id="miniBagHeader" className={styles.container}>
    <span className={styles.bagTitle}>
      {formatTranslation("MiniBag.MyBag")},
    </span>
    <span data-test-id="miniBagItemCount">
      {formatTranslation("MiniBag.ItemCount", {
        smart_count: totalQuantity
      })}
    </span>
  </div>
);

MinibagHeader.propTypes = {
  formatTranslation: PropTypes.func.isRequired,
  totalQuantity: PropTypes.number.isRequired
};

export default withTranslation(MinibagHeader);
