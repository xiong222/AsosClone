import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { stringify } from "query-string";
import withViewport from "../Viewport/withViewport";
import withTranslation from "../translation";
import styles from "./index.css";
import IconNotification from "../IconNotification";
import { getMyAccountBaseUrl } from "../../helpers/externalLinks";
import classnames from "classnames";
import { tabIndex } from "../../../helpers/accessibility";

const CONTACT_PREFERENCES = "ContactPreferences";
const MY_ACCOUNT = "MyAccount";
const MY_ORDERS = "MyOrders";
const RETURNS_INFORMATION = "ReturnsInformation";

const cx = classnames.bind(styles);

class MyAccountLinks extends PureComponent {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
    defaultStoreUrl: PropTypes.string.isRequired,
    focusable: PropTypes.bool,
    formatTranslation: PropTypes.func.isRequired,
    isReconsentRequired: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool,
    keyStoreDataversion: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    queryParams: PropTypes.object,
    storeCode: PropTypes.string.isRequired
  };

  buildLinks() {
    const {
      countryCode,
      defaultStoreUrl,
      formatTranslation,
      isReconsentRequired,
      keyStoreDataversion,
      lang,
      queryParams = {},
      storeCode
    } = this.props;

    const queryString =
      "?" +
      stringify({
        ...queryParams,
        lang,
        store: storeCode,
        country: countryCode,
        keyStoreDataversion
      });

    const baseUrl = getMyAccountBaseUrl();

    const links = [
      {
        id: MY_ACCOUNT,
        href: baseUrl + queryString,
        showNotification: false
      },
      {
        id: MY_ORDERS,
        href: `${baseUrl}/orders${queryString}`,
        showNotification: false
      },
      {
        id: RETURNS_INFORMATION,
        href: defaultStoreUrl.concat(
          formatTranslation(`MyAccountLinks.${RETURNS_INFORMATION}Link`),
          "&",
          stringify(queryParams)
        ),
        showNotification: false
      },
      {
        id: CONTACT_PREFERENCES,
        href: `${baseUrl}/contact-preferences${queryString}`,
        showNotification: isReconsentRequired
      }
    ];

    return links;
  }

  render() {
    const { isVisible, formatTranslation, focusable } = this.props;

    if (!isVisible) return null;

    return (
      <React.Fragment>
        {this.buildLinks().map(({ id, href, showNotification }) => (
          <a
            href={href}
            className={cx(styles.link, styles[id])}
            key={id}
            tabIndex={tabIndex(focusable)}
            data-testid={`${id.toLowerCase()}-link`}
          >
            {showNotification && (
              <span className={cx(styles.notificationContainer)}>
                <IconNotification />
              </span>
            )}
            {formatTranslation(`MyAccountLinks.${id}`)}
          </a>
        ))}
      </React.Fragment>
    );
  }
}

export default withViewport(withTranslation(MyAccountLinks));
