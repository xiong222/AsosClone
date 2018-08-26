import React from 'react';
import { navigationPropType } from '../../../../state/modules/navigation';
import ImageCardWithDescription from './ImageCardWithDescription';
import styles from './index.css';

const ImageCardsWithDescription = ({ item: { items } }) => (
  <div className={styles.cardList}>
    {items
      .slice(0, 8)
      .map((item) => <ImageCardWithDescription item={item} key={item.id} />)}
  </div>
);

ImageCardsWithDescription.propTypes = {
  item: navigationPropType.isRequired
};

export default ImageCardsWithDescription;
