import React from 'react';
import CategoryHeader from '../../template/components/CategoryHeader';
import Breadcrumbs from '../../template/components/Breadcrumbs';
import ProductListingPage from '../../template/components/ProductListingPage';

class CategoryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Breadcrumbs />
        <CategoryHeader />
        <ProductListingPage />
      </div>
    );
  }
}

export default CategoryPage;
