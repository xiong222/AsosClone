import React from 'react';
import classnames from 'classnames';
import { navigationPropType } from '../../../../state/modules/navigation';
import { getBackgroundImageUrl } from '../../../../helpers/navigationBackgroundImageResolver';

import NavAnchor from '../../NavAnchor';
import styles from './index.css';

const cx = classnames.bind(styles);

const MarketingImage = ({ item }) => (
  <div
    className={cx(styles.container, {
      [styles.container__column]: item.largeScreenColumnSpan === 1
    })}
  >
    {itemList(item)}
  </div>
);

const truncatedLabel = (item, largeScreenColumnSpan) =>
  (largeScreenColumnSpan === 3
    ? item.label.substring(0, 26)
    : item.label.substring(0, 36));

const itemList = ({ items, largeScreenColumnSpan }) =>
  items.map((item) => {
    const labelClasses = {
      [styles[`label__${item.largeScreenStyleType}`]]: true
    };

    const thumbnailGradientType = (numberOfItems, numberOfCols) => {
      const type = numberOfItems / numberOfCols;
      return type > 2 ? 'horizontal' : 'vertical';
    };

    return (
      <NavAnchor
        key={item.id}
        item={item}
        className={styles.item}
        data-testid="marketing-image"
      >
        <img
          alt=""
          src={getBackgroundImageUrl(item.largeScreenImageUrl, 320)}
          className={styles.image}
        />

        <div
          className={cx(
            styles.thumbnail,
            styles[thumbnailGradientType(items.length, largeScreenColumnSpan)],
            styles[item.largeScreenStyleType]
          )}
        />

        {item.largeScreenStyleType !== 'noTitle' ? (
          <span className={cx(styles.label, labelClasses)}>
            {truncatedLabel(item, largeScreenColumnSpan)}
          </span>
        ) : null}
      </NavAnchor>
    );
  });

MarketingImage.propTypes = {
  item: navigationPropType.isRequired
};

export default MarketingImage;
