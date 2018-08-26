import React from "react";
import PropTypes from "prop-types";
import styles from "./ValueProposition.css";

const ValueProposition = ({ messages, header }) => (
  <div className={styles.container} data-testid="value-proposition">
    <div className={styles.header}>{header}</div>
    {messages.map(message => (
      <p key={message} className={styles.message}>
        {message}
      </p>
    ))}
  </div>
);

ValueProposition.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
  header: PropTypes.string
};

export default ValueProposition;
