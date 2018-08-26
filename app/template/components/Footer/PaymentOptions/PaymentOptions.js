import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import {
  viewportPropType,
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT
} from '../../../state/modules/layout';

const maxProvidersFor = (viewport) => (viewport === MEDIUM_VIEWPORT ? 7 : 10);

const PaymentOptions = ({ paymentProviders, viewport }) => {
  paymentProviders = [{ name: 'visa', logo: 'https://images.asos-media.com/navigation/visa-png' },
    { name: 'mastercard', logo: 'https://images.asos-media.com/navigation/mastercard-png' },
    { name: 'paypal', logo: 'https://images.asos-media.com/navigation/pay-pal-png' },
    { name: 'americanexpress', logo: 'https://images.asos-media.com/navigation/american-express-png' },
    { name: 'visaelectron', logo: 'https://images.asos-media.com/navigation/visa-electron-png' }];

  return (viewport !== SMALL_VIEWPORT && (
    <div className={styles.paymentOptions}>
      {paymentProviders.slice(0, maxProvidersFor(viewport)).map((provider) => (
        <span key={provider.name} className={styles.provider}>
          <img src={provider.logo} alt={provider.name} />
        </span>
      ))}
    </div>
  ));
};

PaymentOptions.propTypes = {
  paymentProviders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired
    })
  ),
  viewport: viewportPropType
};

export default PaymentOptions;
