import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { stringify } from 'querystring';
import Button from '../../Button';
import withTranslation from '../../translation';
import { getMyAccountBaseUrl } from '../../../helpers/externalLinks';
import {
  trackGdprKeepSending,
  trackGdprStopSending
} from '../../../../helpers/events';

import styles from './Confirmation.css';

const cx = classnames.bind(styles);

class ConfirmationSuccess extends Component {
  handleClick = () => {
    const { onClose } = this.props;

    onClose();
  };

  componentDidMount() {
    const { buildBasicPayload, isOptedIn } = this.props;
    const details = buildBasicPayload();
    if (isOptedIn) {
      trackGdprKeepSending(details);
    } else {
      trackGdprStopSending(details);
    }
  }

  buildMyAccountURL() {
    const {
      countryCode,
      ctaRef,
      keyStoreDataversion,
      lang,
      storeCode
    } = this.props;

    const params = stringify({
      lang,
      store: storeCode,
      country: countryCode,
      keyStoreDataversion,
      ctaRef
    });

    return [`${getMyAccountBaseUrl()}/contact-preferences`, params].join('?');
  }

  getLabel(label) {
    const { formatTranslation, isOptedIn } = this.props;
    const optInLabel = isOptedIn ? 'In' : 'Out';

    return formatTranslation(`GDPR.${optInLabel}Confirmation${label}`);
  }

  render() {
    const { formatTranslation, isOptedIn } = this.props;

    return (
      <section
        className={cx('container', {
          container__isIn: isOptedIn
        })}
      >
        <h1 className={styles.heading} data-testid="gdpr-confirmation-heading">
          {this.getLabel('Heading')}
        </h1>
        <p className={styles.body} data-testid="gdpr-confirmation-body">
          {this.getLabel('Body')}
        </p>
        <div className={styles.actions}>
          <Button theme="primary" onClick={this.handleClick}>
            {formatTranslation('GDPR.ShoppingButton')}
          </Button>
          <Button theme="secondary" href={this.buildMyAccountURL()}>
            {formatTranslation('GDPR.PreferencesButton')}
          </Button>
        </div>
      </section>
    );
  }
}

ConfirmationSuccess.propTypes = {
  buildBasicPayload: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
  ctaRef: PropTypes.string.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  isOptedIn: PropTypes.bool,
  keyStoreDataversion: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  storeCode: PropTypes.string.isRequired
};

ConfirmationSuccess.defaultProps = {
  isOptedIn: false
};

export default withTranslation(ConfirmationSuccess);
