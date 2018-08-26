import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../../translation';
import Notification from '../../Notification';

const ErrorMessage = ({ formatTranslation, dismissBagError, showError }) => (showError ? (
  <Notification type="alert" onClose={dismissBagError}>
    <p>{formatTranslation('MiniBag.ErrorMessage.firstLine')}</p>
    <p>{formatTranslation('MiniBag.ErrorMessage.secondLine')}</p>
  </Notification>
) : null);

ErrorMessage.propTypes = {
  showError: PropTypes.bool.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  dismissBagError: PropTypes.func
};

export default withTranslation(ErrorMessage);
