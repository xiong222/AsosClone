import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../../../translation';
import styles from './index.css';
import GermanVATIncluded from './GermanVATIncluded';

const SubTotal = ({ text, formatTranslation }) => (
  <div className={styles.subTotalContainer}>
    <h1>{formatTranslation('MiniBag.SubTotal')}</h1>
    <div data-test-id="miniBagSubTotal">
      {text}
      <small className={styles.germanVATInc}>
        <GermanVATIncluded />
      </small>
    </div>
  </div>
);

SubTotal.defaultProps = {
  text: null
};

SubTotal.propTypes = {
  formatTranslation: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default withTranslation(SubTotal);
