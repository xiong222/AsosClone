import React from "react";
import PropTypes from "prop-types";
import styles from "./index.css";
import withTranslation from "../../translation";

const CookieDisclaimer = props => {
  CookieDisclaimer.propTypes = {
    formatTranslation: PropTypes.func.isRequired,
    closeCookieMessage: PropTypes.func.isRequired,
    cookieMessageOpen: PropTypes.bool.isRequired,
    isSidePanelOpen: PropTypes.bool.isRequired,
    defaultStoreUrl: PropTypes.string.isRequired
  };

  const {
    formatTranslation,
    closeCookieMessage,
    cookieMessageOpen,
    isSidePanelOpen,
    defaultStoreUrl
  } = props;

  const shouldDisplayCookieDisclaimer = !isSidePanelOpen && cookieMessageOpen;

  return shouldDisplayCookieDisclaimer ? (
    <div className={styles.cookieDisclaimer}>
      <div className={styles.container} data-testid="cookie-disclaimer">
        <p className={styles.summary}>
          {formatTranslation("CookieDisclaimer.summary")}
          <a
            className={styles.readMore}
            href={defaultStoreUrl.concat(
              formatTranslation("CookieDisclaimer.link")
            )}
          >
            {formatTranslation("CookieDisclaimer.readMore")}
          </a>
        </p>
        <button
          type="button"
          className={styles.closeButton}
          onClick={closeCookieMessage}
          data-testid="close-button"
        />
      </div>
    </div>
  ) : null;
};

export default withTranslation(CookieDisclaimer);
