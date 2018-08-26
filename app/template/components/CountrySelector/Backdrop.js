import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.css';

const Backdrop = ({ children }) => (
  <div className={styles.backdrop}>{children}</div>
);

Backdrop.propTypes = {
  children: PropTypes.node
};

export default Backdrop;

