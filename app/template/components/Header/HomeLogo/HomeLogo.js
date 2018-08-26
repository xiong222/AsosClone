import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import styles from './index.css';

const HomeLogo = ({ storeUrls, gender = 'default' }) => (
  <a className={styles.link} href="/" data-testid="asoslogo">
    <Logo />
  </a>
);

HomeLogo.propTypes = {
  storeUrls: PropTypes.object.isRequired,
  gender: PropTypes.string
};

export default HomeLogo;
