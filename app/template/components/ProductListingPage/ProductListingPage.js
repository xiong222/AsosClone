import styles from './ProductListingPage.css';
import React from 'react';
import viewportStyle from '../../../container/ViewportOnly/MediumLargeViewportOnly.css';
import HorizontalRefinements from '../HorizontalRefinements';
import ProductList from '../ProductList/ProductList';

const ProductListingPage = () => (
  <div className={styles.wrapper}>
    <div>
      <div className={viewportStyle.container}>
        <HorizontalRefinements/>
        <ProductList />
      </div>
    </div>
  </div>
);

export default ProductListingPage;
