import React from 'react';
import styles from './HorizontalRefinements.css';
import DropdownMenu from './DropdownMenu';
import _ from 'lodash'

const HorizontalRefinements = ({}) => (
  <div className={styles.stickyHeader}>
    <div className="headroom headroom--unfixed">
      <div className={styles.container}>
        <ul data-auto-id="mediumRefinements" className={styles.ul}>
          {_.times(8, i =>
          <li data-dropdown-id="sort" data-auto-id="sort" className={styles.li}>
            <DropdownMenu />
          </li>
          )}
        </ul>
      </div>
    </div>
  </div>
);

export default HorizontalRefinements;
