import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../../../translation';
import Button from '../../../../components/Button';
import { withParams } from '../../../../../helpers/queryString';

import styles from './index.css';

const DeliveryProposition = ({
  defaultStoreUrl,
  formatTranslation,
  startCheckout
}) => {
  function linkWithAnalytics(link) {
    return withParams(link, { ctaref: 'mini bag' });
  }
  return (
    <div className={styles.bagLinks}>
      <div className={styles.buttonContainer}>
        <Button
          theme="secondary"
          href={linkWithAnalytics(
            defaultStoreUrl.concat(formatTranslation('Bag.Link'))
          )}
          data-test-id="bag-link"
          tabIndex="-1"
        >
          {formatTranslation('MiniBag.Footer.BagLinks.Bag.Text')}
        </Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          theme="green"
          href="#"
          onClick={() => startCheckout()}
          data-test-id="checkout-link"
          tabIndex="-1"
        >
          {formatTranslation('MiniBag.Footer.BagLinks.Checkout.Text')}
        </Button>
      </div>
    </div>
  );
};

DeliveryProposition.propTypes = {
  defaultStoreUrl: PropTypes.string.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  startCheckout: PropTypes.func.isRequired
};

export default withTranslation(DeliveryProposition);
