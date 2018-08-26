import React, { Component } from "react";
import PropTypes from "prop-types";
import { stringify } from "querystring";
import { getMyAccountBaseUrl } from "../../../helpers/externalLinks";
import Button from "../../Button";
import withTranslation from "../../translation";
import Option from "../Option";
import styles from "./ContactPreferences.css";
import { trackOpenGdprModal } from "../../../../helpers/events";

class ContactPreferences extends Component {
  componentDidMount() {
    const { buildBasicPayload } = this.props;

    trackOpenGdprModal(buildBasicPayload());
  }

  handleInClick = () => {
    const { optIn } = this.props;

    optIn();
  };

  handleOutClick = () => {
    const { optOut } = this.props;

    optOut();
  };

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

    return [getMyAccountBaseUrl() + "/contact-preferences", params].join("?");
  }

  getTitleSubtitle() {
    const {
      firstName,
      formatTranslation,
      gdprDeadlineCopyFeature
    } = this.props;

    const path = `GDPR.ContactPreferences${gdprDeadlineCopyFeature
      ? ".Deadline"
      : ""}`;

    return {
      title: formatTranslation(`${path}.Header`, { name: firstName }),
      subtitle: formatTranslation(`${path}.Description`)
    };
  }

  render() {
    const {
      ctaRef,
      formatTranslation,
      gdprDeadlineCopyFeature,
      hasError,
      isLoggedIn,
      isOptInLoading,
      isOptOutLoading,
      preferences,
      privacyUrlSegment,
      testContent,
      termsUrlSegment
    } = this.props;

    const translate = key =>
      formatTranslation(`GDPR.ContactPreferences.${key}`);

    const { title, subtitle } = testContent
      ? testContent
      : this.getTitleSubtitle();

    return (
      <div className={styles.container}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.body}>{subtitle}</p>
        <div className={styles.optionListWrapper}>
          <ul className={styles.optionList}>
            {preferences.map(preference => (
              <Option
                key={preference.preferenceId}
                name={preference.title}
                src={preference.imageUrl}
                isSelected={!!preference.customerChannels.length}
              />
            ))}
          </ul>
        </div>
        <p className={styles.small}>{translate("Channels")}</p>
        {hasError && (
          <div className={styles.errorWrapper}>
            <div className={styles.errorMessage}>
              {formatTranslation("GDPR.GreetingLabelError")}
            </div>
          </div>
        )}
        <div className={styles.cta}>
          <Button
            data-testid="gdpr-modal-keep-button"
            theme="primary"
            hasSpinner={isOptInLoading}
            onClick={this.handleInClick}
          >
            {translate(
              gdprDeadlineCopyFeature ? "Deadline.KeepButton" : "KeepButton"
            )}
          </Button>
          <Button
            data-testid="gdpr-modal-myaccount-button"
            theme="secondary"
            href={this.buildMyAccountURL()}
          >
            {isLoggedIn ? translate("EditButton") : translate("LoginButton")}
          </Button>
          <Button
            data-testid="gdpr-modal-optout-button"
            theme="secondary"
            hasSpinner={isOptOutLoading}
            onClick={this.handleOutClick}
          >
            {translate(
              gdprDeadlineCopyFeature ? "Deadline.OptOutButton" : "OptOutButton"
            )}
          </Button>
        </div>
        <p className={styles.footer}>
          <a href={`${privacyUrlSegment}?ctaref=${ctaRef}`} target="_blank">
            {translate("PrivacyLink")}
          </a>
          {" & "}
          <a href={`${termsUrlSegment}?ctaref=${ctaRef}`} target="_blank">
            {translate("Terms")}
          </a>
        </p>
      </div>
    );
  }
}

ContactPreferences.propTypes = {
  buildBasicPayload: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
  ctaRef: PropTypes.string.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  gdprDeadlineCopyFeature: PropTypes.bool,
  hasError: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  isOptInLoading: PropTypes.bool,
  isOptOutLoading: PropTypes.bool,
  keyStoreDataversion: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  optIn: PropTypes.func.isRequired,
  optOut: PropTypes.func.isRequired,
  preferences: PropTypes.arrayOf(
    PropTypes.shape({
      consentStatus: PropTypes.string,
      imageURL: PropTypes.string,
      preferenceId: PropTypes.string,
      title: PropTypes.string
    })
  ),
  privacyUrlSegment: PropTypes.string.isRequired,
  storeCode: PropTypes.string.isRequired,
  testContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }),
  termsUrlSegment: PropTypes.string.isRequired
};

ContactPreferences.defaultProps = {
  gdprDeadlineCopyFeature: false,
  preferences: []
};

export default withTranslation(ContactPreferences);
