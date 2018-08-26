import React, { Component } from 'react';
import styles from './DropdownMenu.css';
import classnames from 'classnames/bind';
import LargeScreenSort from '../../Sort/LargeScreenSort';

import withTranslation from '../../translation';

const cx = classnames.bind(styles);

class Form extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const isOpen = this.state.isOpen;

    return (
      <div
        className={cx([styles.container], {
          [styles.dropdown__open]: isOpen
        })}
      >
        <button aria-haspopup="true" aria-expanded={isOpen} className={styles.button} data-filter-toggle="true" onClick={this.onClick}>
          <div className={styles.title}>
            Sort
          </div>
        </button>
        <div
          className={cx([styles.collapsibleMenu], {
            [styles.collapsibleMenu__open]: isOpen
          })}
          data-filter-dropdown="true"
        >
          <LargeScreenSort />
        </div>
      </div>
    );
  }
}

export default Form;
/*
const DropdownMenu = ({}) => {
  const isOpen = true;

  return (

  );
};

export default DropdownMenu;
*/
