import React, { Component } from 'react';
import styles from './index.css';
import parentStyles from '../../HorizontalRefinements/HorizontalRefinements.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
class LargeScreenSort extends Component {
  render() {
    return (
      <div>
        <span className={styles.listTitle} aria-live="polite">Sorted by Our favourites</span>
        <ul className={[parentStyles.ul, styles.ul].join(' ')}>
          <li className={styles.sortItem}>
            <a rel="nofollow" aria-current="true" className={styles.sortLink} href="/men/new-in/abc">
              Our favourites
              <span aria-hidden="true" className={styles.checkbox} />
            </a>
          </li>

          <li className={styles.sortItem}>
            <a rel="nofollow" aria-current="false" className={styles.sortLink} href="/men/new-in/abc">
              Our favourites
              <span aria-hidden="true" className={styles.checkbox} />
            </a>
          </li>

          <li className={styles.sortItem}>
            <a rel="nofollow" aria-current="false" className={styles.sortLink} href="/men/new-in/abc">
              Our favourites
              <span aria-hidden="true" className={styles.checkbox} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LargeScreenSort;
