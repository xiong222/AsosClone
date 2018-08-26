import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  getWelcomeMessage,
  setWelcomeMessage
} from '../../../modules/asos-site-chrome-store-presentation';
import styles from './index.css';
import Icon from '../Icon';
import parse from 'url-parse';
import { getContext } from '../../../client/context';

class WelcomeMessage extends Component {
  state = {};
  componentDidMount() {
    const hasWelcomeMatBeenClosed = getWelcomeMessage();
    if (hasWelcomeMatBeenClosed) {
      return;
    }

    return this.props.requestWelcomeMessage(this.props.platform);
  }
  close = () => {
    setWelcomeMessage(true);
    this.setState({
      isClosed: true
    });
  };
  render() {
    const { browsingLocalStore, redirectUrl, text } = this.props;

    if (this.state.isClosed || !redirectUrl || browsingLocalStore) {
      return null;
    }

    const affid = getContext().getAffiliateId();
    const url = parse(`//${redirectUrl.url}`);

    if (affid) {
      url.query = { ...url.query, xaffid: affid };
    }

    url.query = {
      ...url.query,
      r: 1,
      ctaref: 'welcome mat',
      browseCountry: this.props.country && this.props.country.countryCode
    };

    const { name, imageUrl } = this.props.country;

    return (
      <div className={styles.container} data-testid="welcome-message">
        <div className={styles.wrapper}>
          <img
            src={imageUrl}
            alt={name}
            className={styles.flag}
            data-testid="icon"
          />
          <div>
            <p className={styles.text} data-testid="text">
              {text}
            </p>
            <a
              onClick={this.close}
              className={styles.redirectLink}
              href={url.toString()}
              data-testid="link"
            >
              {redirectUrl.label}
            </a>
          </div>
          <button
            className={styles.closeButton}
            onClick={this.close}
            data-testid="close-button"
          >
            <Icon icon="close" />
          </button>
        </div>
      </div>
    );
  }
}

WelcomeMessage.propTypes = {
  browsingLocalStore: PropTypes.bool,
  requestWelcomeMessage: PropTypes.func,
  redirectUrl: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  }),
  text: PropTypes.string,
  country: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    countryCode: PropTypes.string
  }),
  closeLabel: PropTypes.string,
  platform: PropTypes.string
};

export default WelcomeMessage;
