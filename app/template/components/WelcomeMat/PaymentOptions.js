import React from "react";
import PropTypes from "prop-types";
import styles from "./PaymentOptions.css";

const PaymentOptions = ({ paymentOptions }) => (
  <div className={styles.wrapper}>
    <ul
      className={styles.container}
      data-testid="payment-options"
      aria-label="Available payment methods"
    >
      {paymentOptions.map(option => (
        <li key={option.name} className={styles.paymentOption}>
          <img
            src={option.logo}
            alt={option.name}
            className={styles.logo}
            width="32"
            height="20"
          />
        </li>
      ))}
    </ul>
  </div>
);

PaymentOptions.propTypes = {
  paymentOptions: PropTypes.arrayOf(PropTypes.object)
};

export default PaymentOptions;
