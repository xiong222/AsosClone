import styles from './index.css';
import React from 'react';

const Breadcrumbs = () => (
  <nav className={styles.container}>
    <ol className={styles.list}>
      <li><a href="http://www.asos.com/?hrd=1">Home</a></li>
      <li><a href="http://www.asos.com/men/">Men</a></li>
      <li><a href="http://www.asos.com/men/new-in/cat/?cid=27110">New In</a></li>
      <li><a href="http://www.asos.com/men/new-in/new-in-clothing/cat/?cid=6993">New In: Clothing</a></li>
    </ol>
  </nav>
);

export default Breadcrumbs;
