import React from 'react';
import PropTypes from 'prop-types';
import getRedirectionUrl from './getRedirectionUrl';
import styles from './Message.css';

const StaticLink = ({ url, label, browseCountry }) => (
  <a
    className={styles.redirectLink}
    href={getRedirectionUrl(url, browseCountry).toString()}
    data-testid="shop-there-button"
  >
    {label}
  </a>
);

StaticLink.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  browseCountry: PropTypes.string
};

const ChangeButton = ({ label, openCountrySelector }) => (
  <button
    className={styles.changeButton}
    onClick={openCountrySelector}
    data-testid="change-button"
  >
    {label}
  </button>
);

ChangeButton.propTypes = {
  label: PropTypes.string,
  openCountrySelector: PropTypes.func
};

const Message = ({
  text,
  redirectUrl,
  imageUrl,
  imageLabel,
  openCountrySelector,
  withCountrySelector,
  targetCountryCode
}) => (
  <div className={styles.container}>
    {imageUrl && (
      <img
        src={imageUrl}
        alt={imageLabel}
        className={styles.flag}
        data-testid="icon"
      />
    )}
    <p className={styles.text} data-testid="text">
      {text}
    </p>
    {withCountrySelector ? (
      <ChangeButton
        label={redirectUrl.label}
        openCountrySelector={openCountrySelector}
      />
    ) : (
      <StaticLink {...redirectUrl} browseCountry={targetCountryCode} />
    )}
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  targetCountryCode: PropTypes.string.isRequired,
  redirectUrl: PropTypes.shape(StaticLink.propTypes),
  imageUrl: PropTypes.string,
  imageLabel: PropTypes.string,
  openCountrySelector: PropTypes.func.isRequired,
  withCountrySelector: PropTypes.bool
};

Message.defaultProps = {
  withCountrySelector: false
};

export default Message;
