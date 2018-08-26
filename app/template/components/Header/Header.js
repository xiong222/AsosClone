import React from 'react';
import PropTypes from 'prop-types';
import { LARGE_VIEWPORT } from '../../state/modules/layout/constants';
import FloorNavigation from '../FloorNavigation';
import Burger from '../Burger';
import SearchForm from '../SearchForm';
import Widgets from '../Widgets';
import HomeLogo from './HomeLogo';
import styles from './index.css';

const Header = ({ clearNavActiveItem }) => (
  <div className={styles.container} onMouseEnter={clearNavActiveItem}>
    <div className={styles.body} data-testid="header">
      <Burger />
      <HomeLogo />
      <FloorNavigation viewable={[LARGE_VIEWPORT]} />
      <SearchForm />
      <Widgets />
    </div>
  </div>
);

Header.propTypes = {
  clearNavActiveItem: PropTypes.func.isRequired
};

export default Header;
