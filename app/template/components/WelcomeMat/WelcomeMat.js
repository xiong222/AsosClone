import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  getWelcomeMatClosedForWrongCountry,
  getWelcomeMatClosedForCorrectCountry,
  setWelcomeMatClosedForCorrectCountry,
  setWelcomeMatClosedForWrongCountry
} from '../../../modules/asos-site-chrome-store-presentation';
import IconButton from '../IconButton';
import Message from './Message';
import ValueProposition from './ValueProposition';
import PaymentOptions from './PaymentOptions';
import styles from './WelcomeMat.css';
import { getContext } from '../../../client/context';

class WelcomeMat extends PureComponent {
  static propTypes = {
    platform: PropTypes.string,
    text: PropTypes.string,
    requestWelcomeMat: PropTypes.func.isRequired,
    redirectUrl: PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string
    }),
    country: PropTypes.shape({
      imageUrl: PropTypes.string,
      name: PropTypes.string
    }),
    messages: PropTypes.arrayOf(PropTypes.string),
    isCorrectCountry: PropTypes.bool,
    paymentOptions: PropTypes.arrayOf(PropTypes.object),
    valueHeader: PropTypes.string,
    welcome: PropTypes.string
  };

  state = {
    isClosed: false
  };

  shouldRequestWelcomeMatData() {
    const { isCorrectCountry } = this.props;
    const hasCookieForCountry = isCorrectCountry
      ? getWelcomeMatClosedForCorrectCountry
      : getWelcomeMatClosedForWrongCountry;
    return !hasCookieForCountry();
  }

  componentDidMount() {
    const { requestWelcomeMat, platform } = this.props;

    if (true && this.shouldRequestWelcomeMatData()) {
      requestWelcomeMat(platform);
    }
  }

  close = () => {
    const { isCorrectCountry } = this.props;

    if (!isCorrectCountry) {
      setWelcomeMatClosedForWrongCountry(true);
    }

    this.setState({
      isClosed: true
    });
  };

  render() {
    const {
      text,
      redirectUrl,
      country,
      messages,
      paymentOptions,
      isCorrectCountry,
      valueHeader,
      welcome
    } = this.props;
    const { isClosed } = this.state;

    if (isClosed || !redirectUrl || !getContext()) {
      return null;
    }

    if (isCorrectCountry) {
      setWelcomeMatClosedForCorrectCountry(true);
    }

    const { imageUrl, name: imageLabel } = country;

    return (
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.titleBarWrapper}>
            <div className={styles.titleBar}>
              <div className={styles.title}>{welcome}</div>
              <IconButton
                icon="close"
                className={styles.closeButton}
                data-testid="close-button"
                onClick={this.close}
              />
            </div>
          </div>
          <div className={styles.contentBarWrapper}>
            <div className={styles.contentBar}>
              <Message
                text={text}
                redirectUrl={redirectUrl}
                imageUrl={imageUrl}
                imageLabel={imageLabel}
                withCountrySelector={isCorrectCountry}
                targetCountryCode={country.countryCode}
              />
              {messages &&
              messages.length > 0 && (
                <ValueProposition messages={messages} header={valueHeader} />
              )}
              {paymentOptions.length > 0 && (
                <PaymentOptions paymentOptions={paymentOptions} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeMat;
