import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../../../translation';

import styles from './index.css';

const DeliveryProposition = ({ defaultStoreUrl, formatTranslation }) => (
  <div className={styles.deliveryProposition}>
    <span className={styles.title}>
      {formatTranslation('MiniBag.Footer.DeliveryProposition.Title')}
    </span>
    <span className={styles.description}>
      <span>
        {formatTranslation('MiniBag.Footer.DeliveryProposition.Description')}
      </span>
      <a
        className={styles.descriptionLink}
        href={defaultStoreUrl.concat(
          formatTranslation(
            'MiniBag.Footer.DeliveryProposition.DeliveryInformationLink'
          )
        )}
        tabIndex="-1"
      >
        {formatTranslation('MiniBag.Footer.DeliveryProposition.LinkText')}
      </a>
    </span>
  </div>
);

DeliveryProposition.propTypes = {
  defaultStoreUrl: PropTypes.string.isRequired,
  formatTranslation: PropTypes.func.isRequired
};

export default withTranslation(DeliveryProposition);
