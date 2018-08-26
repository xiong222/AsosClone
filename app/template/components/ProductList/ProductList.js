import styles from './ProductList.css';
import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

const ProductList = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <p className={styles.styleCount}>740 styles found</p>
      <div className={styles.productList}>
        <section data-auto-id="1">
          <ProductTile />
          <ProductTile />
          <ProductTile />
        </section>
      </div>
    </div>
  </div>
);

export default ProductList;
