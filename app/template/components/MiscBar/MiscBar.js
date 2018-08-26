import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../translation';
import CountrySelectorButton from '../CountrySelectorButton';
import { ANALYTICS_POSITION_HEADER } from '../../../helpers/events';
import styles from './MiscBar.css';
import { getMarketplaceUrl } from '../../helpers/externalLinks';
import { withParams } from '../../../helpers/queryString';

const marketplaceUrl = () =>
  withParams(getMarketplaceUrl(), {
    ctaref: 'Global nav'
  });

const MiscBar = ({ formatTranslation, defaultStoreUrl }) => (
  <div className={styles.container} data-testid="topbar">
    <div className={styles.body}>
      <ul className={styles.navigation}>
        <li>
          <a href={marketplaceUrl()} data-testid="marketplace">
            {formatTranslation('MiscBar.Marketplace')}
          </a>
        </li>
        <li>
          <a
            href={formatTranslation('MiscBar.HelpLink')}
            data-testid="help"
          >
            {formatTranslation('MiscBar.Help')}
          </a>
        </li>
        <li>
          <CountrySelectorButton position={ANALYTICS_POSITION_HEADER} />
        </li>
      </ul>
    </div>
  </div>
);

MiscBar.propTypes = {
  formatTranslation: PropTypes.func.isRequired,
  defaultStoreUrl: PropTypes.string
};

export default withTranslation(MiscBar);
