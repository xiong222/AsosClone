import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import IconButton from "../../IconButton";
import withTranslation from "../../translation";
import styles from "./Banner.css";
import cx from "classnames";
import { trackBannerShown, trackBannerClose } from "../../../../helpers/events";

const ANIMATION_INITIAL_WAIT_MS = 800;

class Banner extends Component {
  static propTypes = {
    chooseOptionsAction: PropTypes.func.isRequired,
    dismissAction: PropTypes.func.isRequired,
    firstName: PropTypes.string,
    formatTranslation: PropTypes.func.isRequired,
    greeting: PropTypes.string,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
  };

  static defaultProps = {
    isLoading: false
  };

  constructor(props) {
    super(props);
    this.state = {
      displayBanner: true,
      revealBanner: false
    };
  }

  handleClose = () => {
    const animationDurationMs = parseInt(styles.transitionDurationMs, 10);
    this.setState({ revealBanner: false });
    trackBannerClose();

    setTimeout(() => {
      this.props.dismissAction();
      this.setState({ displayBanner: false });
    }, animationDurationMs);
  };

  handleOpen = () => {
    this.setState({ revealBanner: true });
    trackBannerShown();
  };

  componentDidMount() {
    setTimeout(this.handleOpen, ANIMATION_INITIAL_WAIT_MS);
  }

  render() {
    const {
      chooseOptionsAction,
      firstName,
      formatTranslation,
      greeting,
      hasErrored,
      isLoading
    } = this.props;

    if (!this.state.displayBanner) {
      return null;
    }

    const greetingText = greeting || formatTranslation("GDPR.Greeting");

    const greetingContent = hasErrored
      ? formatTranslation("GDPR.GreetingLabelError")
      : formatTranslation("GDPR.GreetingLabel", {
        name: firstName,
        greeting: greetingText
      });

    const buttonContent = formatTranslation(
      "GDPR.GreetingButton".concat(hasErrored ? "Error" : "")
    );

    const handleButtonClick = () => {
      chooseOptionsAction(this.handleClose);
    };

    return (
      <div className={styles.wrapper} data-testid="gdpr-wrapper-banner-div">
        <div
          className={cx({
            [styles.container]: true,
            [styles.error]: hasErrored,
            [styles.show]: this.state.revealBanner
          })}
        >
          <div className={styles.content} data-testid="gdpr-banner-div">
            <div className={styles.greeting}>{greetingContent}</div>
            <div className={styles.cta}>
              <Button
                data-testid="gdpr-banner-button"
                hasSpinner={isLoading}
                hasInvertedSize
                theme="primary"
                onClick={handleButtonClick}
              >
                {buttonContent}
              </Button>
            </div>
            <IconButton
              aria-label="Close"
              className={styles.close}
              icon="close"
              onClick={this.handleClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation(Banner);
