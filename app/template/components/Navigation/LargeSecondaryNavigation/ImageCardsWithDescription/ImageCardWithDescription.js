import React from 'react';
import classnames from 'classnames';
import { navigationItemPropType } from '../../../../state/modules/navigation';
import { getBackgroundImageUrl } from '../../../../helpers/navigationBackgroundImageResolver';
import NavAnchor from '../../NavAnchor';
import styles from './index.css';

const cx = classnames.bind(styles);

const ImageCardWithDescription = ({ item }) => {
  const {
    label,
    subtitle,
    largeScreenImageUrl,
    largeScreenStyleType = 'light'
  } = item;

  return (
    <NavAnchor item={item} className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        <div
          aria-hidden="true"
          className={styles.image}
          role="presentation"
          style={
            largeScreenImageUrl && {
              backgroundImage: `url(${getBackgroundImageUrl(
                largeScreenImageUrl,
                320
              )})`
            }
          }
        />
        <div
          className={cx(styles.thumbnailCover, styles[largeScreenStyleType])}
        />
        {item.largeScreenStyleType !== 'noTitle' && (
          <span className={cx(styles.cardTitle, styles[largeScreenStyleType])}>
            {label.substring(0, 24)}
          </span>
        )}
      </div>
      <span className={styles.cardDescription}>
        {subtitle && subtitle.substring(0, 45)}
      </span>
    </NavAnchor>
  );
};

ImageCardWithDescription.propTypes = {
  item: navigationItemPropType.isRequired
};
export default ImageCardWithDescription;
