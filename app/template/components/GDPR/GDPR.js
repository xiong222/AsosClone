import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import parse from "url-parse";
import Banner from "./Banner";
import Confirmation from "./Confirmation";
import ContactPreferences from "./ContactPreferences";
import Modal from "../Modal";
import { removeURLParameter } from "../../../helpers/url";
import {
  getValueFromLocalStorage,
  setLocalStorage
} from "../../../helpers/webStorage";

export const GDPR_STORAGE_KEY = "Asos.GdprBanner";

class GDPR extends Component {
  state = {
    fetchPreferencesError: false,
    preferencesInitialised: false,
    showBanner: true,
    showModal: false
  };

  componentDidMount() {
    this.setState({
      showModal: !!this.isContactAvailable()
    });
  }

  showModalGdprPhaseTwo(shouldShowBanner) {
    if (
      this.props.gdprPhaseTwoFeature &&
      this.props.testIsLoaded &&
      !this.state.preferencesInitialised &&
      shouldShowBanner
    ) {
      setTimeout(() => this.handleBannerClick(), 4000);

      this.setState({ preferencesInitialised: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const gdprSessionStorageObject = JSON.parse(
      getValueFromLocalStorage(GDPR_STORAGE_KEY)
    );

    const customerShouldSeeBanner = !(
      gdprSessionStorageObject &&
      nextProps.customerGuid === gdprSessionStorageObject.customerGuid &&
      gdprSessionStorageObject.expiry > new Date().toISOString()
    );

    this.setState(state => ({
      showBanner: state.showBanner && customerShouldSeeBanner
    }));

    this.showModalGdprPhaseTwo(customerShouldSeeBanner);
  }

  dismissGdprNotificationsForSession = () => {
    const { customerGuid } = this.props;
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 8); // set 8 hour expiry from now

    const setLocalStorageValues = JSON.stringify({
      customerGuid: customerGuid,
      expiry: expiryDate.toISOString()
    });

    setLocalStorage(GDPR_STORAGE_KEY, setLocalStorageValues);
  };

  handleBannerClick = async (callback = () => {}) => {
    const { setUserPreferences, gdprPhaseTwoFeature } = this.props;

    this.setState({
      isPreferencesLoading: true
    });

    try {
      await setUserPreferences();

      this.dismissGdprNotificationsForSession();

      this.setState({
        fetchPreferencesError: false,
        isPreferencesLoading: false,
        showBanner: gdprPhaseTwoFeature,
        showModal: true
      });
      callback();
    } catch (err) {
      this.setState({
        fetchPreferencesError: true,
        isPreferencesLoading: false
      });
    }
  };

  handleClose = () => {
    this.setState({
      showBanner: false,
      showModal: false
    });

    const url = removeURLParameter(window.location.href, "contact");
    window.history.replaceState({}, "", url);
  };

  isContactAvailable() {
    if (typeof window !== "undefined" && window.location) {
      return "contact" in parse(window.location.href, true).query;
    }
    return false;
  }

  getContact() {
    if (typeof window !== "undefined" && window.location) {
      const url = parse(window.location.href, true);
      return url.query.contact;
    }
    return false;
  }

  getOptedIn() {
    const { hasReconsented } = this.props;
    const hasContactInAsAQueryParam = this.getContact()
      ? !!(this.getContact().toLowerCase() === "in")
      : false;

    return hasReconsented || hasContactInAsAQueryParam;
  }

  renderPreferences() {
    const {
      ctaRef,
      hasError,
      isOptInLoading,
      isOptOutLoading,
      isReconsentRequired,
      optIn,
      optOut,
      preferences,
      privacyUrlSegment,
      testContent,
      termsUrlSegment
    } = this.props;

    if (this.isContactAvailable()) {
      return null;
    }

    if (!isReconsentRequired) {
      return null;
    }

    return (
      <ContactPreferences
        ctaRef={ctaRef}
        hasError={hasError}
        isOptInLoading={isOptInLoading}
        isOptOutLoading={isOptOutLoading}
        optIn={optIn}
        optOut={optOut}
        preferences={preferences}
        privacyUrlSegment={privacyUrlSegment}
        testContent={testContent}
        termsUrlSegment={termsUrlSegment}
      />
    );
  }

  renderConfirmation() {
    const { ctaRef, isReconsentRequired, hasReconsented } = this.props;

    if (!this.isContactAvailable()) {
      if (isReconsentRequired) {
        return null;
      }

      if (hasReconsented === null) {
        return null;
      }
    }

    return (
      <Confirmation
        ctaRef={ctaRef}
        isOptedIn={this.getOptedIn()}
        onClose={this.handleClose}
      />
    );
  }

  render() {
    const {
      isReconsentRequired,
      testContent,
      testIsLoaded,
      gdprPhaseTwoFeature,
      hasReconsented
    } = this.props;
    const {
      fetchPreferencesError,
      isPreferencesLoading,
      showBanner,
      showModal
    } = this.state;

    const shouldShowBanner = isReconsentRequired && showBanner && testIsLoaded;

    return gdprPhaseTwoFeature ? (
      <Fragment>
        <Modal
          isOpen={
            showModal &&
            (shouldShowBanner ||
              this.isContactAvailable() ||
              hasReconsented !== null)
          }
          onClose={this.handleClose}
        >
          {this.renderPreferences()}
          {this.renderConfirmation()}
        </Modal>
      </Fragment>
    ) : (
      <Fragment>
        <Modal isOpen={showModal} onClose={this.handleClose}>
          {this.renderPreferences()}
          {this.renderConfirmation()}
        </Modal>
        {shouldShowBanner && (
          <Banner
            chooseOptionsAction={this.handleBannerClick}
            dismissAction={this.dismissGdprNotificationsForSession}
            hasErrored={fetchPreferencesError}
            greeting={testContent && testContent.greeting}
            isLoading={isPreferencesLoading}
            onClick={this.handleBannerClick}
          />
        )}
      </Fragment>
    );
  }
}

GDPR.propTypes = {
  customerGuid: PropTypes.string,
  ctaRef: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  gdprPhaseTwoFeature: PropTypes.bool,
  hasReconsented: PropTypes.bool,
  isOptInLoading: PropTypes.bool,
  isOptOutLoading: PropTypes.bool,
  isReconsentRequired: PropTypes.bool,
  optIn: PropTypes.func,
  optOut: PropTypes.func,
  preferences: PropTypes.array,
  privacyUrlSegment: PropTypes.string,
  setUserPreferences: PropTypes.func.isRequired,
  testContent: PropTypes.shape({
    greeting: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
  }),
  testIsLoaded: PropTypes.bool,
  termsUrlSegment: PropTypes.string
};

GDPR.defaultProps = {
  gdprPhaseTwoFeature: false,
  hasReconsented: null,
  preferences: [],
  testIsLoaded: false
};

export default GDPR;
