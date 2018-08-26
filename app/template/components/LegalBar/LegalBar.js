import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../translation';
import styles from './LegalBar.css';

const LegalBar = ({ formatTranslation, defaultStoreUrl }) => (
  <div className={styles.container}>
    <div className={styles.body} data-testid="legalbar">
      <p className={styles.copyright}>© {new Date().getFullYear()} ASOS</p>
      <ul className={styles.links}>
        <li>
          <a
            href={'/store'.concat(
              formatTranslation('LegalBar.PrivacyLink')
            )}
          >
            {formatTranslation('LegalBar.Privacy')}
          </a>
        </li>
        <li>
          <a
            href={'/store'.concat(
              formatTranslation('LegalBar.TermsLink')
            )}
          >
            {formatTranslation('LegalBar.Terms')}
          </a>
        </li>
        <li className={styles.hideOnSmallViewport}>
          <a
            href={'/store'.concat(
              formatTranslation('LegalBar.AccessibilityLink')
            )}
          >
            {formatTranslation('LegalBar.Accessibility')}
          </a>
        </li>
      </ul>
    </div>
  </div>
);

LegalBar.propTypes = {
  formatTranslation: PropTypes.func.isRequired,
  defaultStoreUrl: PropTypes.string
};

export default withTranslation(LegalBar);
