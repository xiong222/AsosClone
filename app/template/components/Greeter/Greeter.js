/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getMyAccountBaseUrl,
  getIdentitySdkAuthHost
} from "../../helpers/externalLinks";
import { tabIndex } from "../../../helpers/accessibility";
import { withParams } from "../../../helpers/queryString";
import withTranslation from "../translation";
import withViewport from "../Viewport/withViewport";
import styles from "./index.css";
import { GDPR_STORAGE_KEY } from "../GDPR/GDPR";
import { removeValueFromLocalStorage } from "../../../helpers/webStorage";

const getGreetingMessage = (isKnown, firstName, formatTranslation) =>
  isKnown && (
    <span className={styles.welcome}>
      {formatTranslation("MyAccountLinks.Greeting", { name: firstName })}
    </span>
  );

const getButtonLinks = (
  isLoggedIn,
  isRecognised,
  signUpLink,
  signInLink,
  formatTranslation,
  focusable
) => {
  const identitySdk =
    typeof window !== "undefined" && window.__sdk && window.__sdk.identity;

  if (!isLoggedIn && !isRecognised) {
    return (
      <span className={styles.links}>
        <a
          className={styles.link}
          href={signInLink}
          data-testid="signin-link"
          tabIndex={tabIndex(focusable)}
          onClick={e => {
            if (!identitySdk) {
              return;
            }
            e.preventDefault();
            identitySdk.login();
          }}
        >
          {formatTranslation("MyAccountLinks.SignInLabel")}
        </a>
        <div className={styles.pipe} />
        <a
          className={styles.link}
          href={signUpLink}
          data-testid="signup-link"
          tabIndex={tabIndex(focusable)}
        >
          {formatTranslation("MyAccountLinks.SignUpLabel")}
        </a>
      </span>
    );
  }

  return (
    <span className={styles.links}>
      <a
        className={styles.link}
        href=""
        onClick={e => {
          e.preventDefault();
          removeValueFromLocalStorage(GDPR_STORAGE_KEY);
          identitySdk && identitySdk.logout();
        }}
        data-testid="signout-link"
        tabIndex={tabIndex(focusable)}
      >
        {formatTranslation("MyAccountLinks.SignOutLabel")}
      </a>
    </span>
  );
};

class Greeter extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isRecognised: PropTypes.bool,
    formatTranslation: PropTypes.func.isRequired,
    firstName: PropTypes.string,
    lang: PropTypes.string,
    countryCode: PropTypes.string,
    storeCode: PropTypes.string,
    keyStoreDataversion: PropTypes.string,
    focusable: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      returnUrl: false
    };
  }

  componentDidMount() {
    this.setState({
      returnUrl: window.location.href
    });
  }

  render() {
    const {
      isLoggedIn,
      isRecognised,
      firstName,
      formatTranslation,
      lang,
      countryCode,
      storeCode,
      keyStoreDataversion,
      focusable
    } = this.props;

    const params = {
      "lang": "en",
      store: storeCode,
      country: 'en',
      keyStoreDataversion
    };

    const signUpBaseUrl =
      getIdentitySdkAuthHost() + formatTranslation("MyAccountLinks.SignUpLink");

    const signUpLink = withParams(signUpBaseUrl, {
      ...params,
      returnUrl: this.state.returnUrl
    });

    const signInLink = withParams(getMyAccountBaseUrl(), params);

    return (
      <div className={styles.container}>
        {getGreetingMessage(
          isLoggedIn || isRecognised,
          firstName,
          formatTranslation
        )}
        {getButtonLinks(
          isLoggedIn,
          isRecognised,
          signUpLink,
          signInLink,
          formatTranslation,
          focusable
        )}
      </div>
    );
  }
}

export default withViewport(withTranslation(Greeter));
