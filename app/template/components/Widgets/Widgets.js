import React, { Component } from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-transition-group/CSSTransition";
import { SMALL_VIEWPORT, viewportPropType } from "../../state/modules/layout";
import IconButton from "../IconButton";
import IconNotification from "../IconNotification";
import Widget from "./Widget";
import styles from "./Widgets.css";
import Dropdown from "../Dropdown";
import Greeter from "../Greeter";
import MyAccountLinks from "../MyAccountLinks";
import MiniBag from "../MiniBag";
import MiniBagHeader from "../MiniBag/Header";
import MiniBagFooter from "../MiniBag/Footer";
import withTranslation from "../translation";
import widgetStyles from "./Widget/index.css";
import { getMyAccountBaseUrl } from "../../helpers/externalLinks";
import { withParams } from "../../../helpers/queryString";
import { MY_ACCOUNT, MINIBAG } from "../../state/modules/dropdown";
const trackingQuery = "?nlid=nav header";

const ENTER_KEY = 13;
const keyCode = e => e.keyCode || e.which;

class Widgets extends Component {
  state = {
    isBagIconAnimating: false,
    isBagPage: false
  };

  componentDidMount = () => {
    const { getSavedItemsFromSDK, formatTranslation } = this.props;
    getSavedItemsFromSDK();
    this.setState({
      isBagPage:
        window.location.pathname.indexOf("/" + formatTranslation("Bag.Link")) >
        -1
    });
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.isUpdated &&
      nextProps.noOfBagItems > this.props.noOfBagItems
    ) {
      this.toggleAnimation();
    }
  };

  handleSearch = () => {
    const { openSearch } = this.props;
    openSearch();
  };

  toggleAnimation = () => {
    this.setState(state => ({
      isBagIconAnimating: !state.isBagIconAnimating
    }));
  };

  searchWidget = () => (
    <Widget viewable={[SMALL_VIEWPORT]}>
      <IconButton
        type="label"
        htmlFor="chrome-search"
        icon="search"
        onClick={this.handleSearch}
        data-testid="searchIcon"
        className={styles.widgetButton}
        aria-label={this.props.formatTranslation("Icon.Search")}
      />
    </Widget>
  );

  accountWidget = () => {
    const { viewport } = this.props;

    const iconName = this.props.isLoggedIn
      ? `accountFilled`
      : `accountUnfilled`;

    if (viewport !== SMALL_VIEWPORT) {
      return (
        <Widget className={widgetStyles.myAccountWidget}>
          <Dropdown
            name={MY_ACCOUNT}
            header={<Greeter />}
            body={<MyAccountLinks />}
            footer={null}
          >
            <IconButton
              type="button"
              icon={iconName}
              data-testid="accountIcon"
              className={styles.widgetButton}
              aria-label={this.props.formatTranslation("Icon.MyAccount")}
            />
            {this.props.isReconsentRequired ? (
              <IconNotification data-testid="gdpr-icon-notification" />
            ) : null}
          </Dropdown>
        </Widget>
      );
    } else {
      const { countryCode, lang, keyStoreDataversion, storeCode } = this.props;

      const params = {
        lang,
        store: storeCode,
        country: countryCode,
        keyStoreDataversion,
        nlid: "nav header"
      };

      const href = withParams(getMyAccountBaseUrl(), params);

      return (
        <Widget className={widgetStyles.myAccountWidget}>
          <IconButton
            type="a"
            href={href}
            icon={iconName}
            data-testid="accountIcon"
            className={styles.widgetButton}
            aria-label={this.props.formatTranslation("Icon.MyAccount")}
          >
            {this.props.isReconsentRequired ? (
              <IconNotification data-testid="gdpr-icon-notification" />
            ) : null}
          </IconButton>
        </Widget>
      );
    }
  };

  bagWidget = () => {
    const {
      viewport,
      noOfBagItems,
      defaultStoreUrl,
      miniBagToggle
    } = this.props;
    const { isBagPage } = this.state;
    const bagIconName = noOfBagItems ? "bagFilled" : "bagUnfilled";

    const bagUrl = defaultStoreUrl.concat(
      this.props.formatTranslation("Bag.Link"),
      trackingQuery
    );

    const bagIcon = (hasDropdown = false) => (
      <IconButton
        type="a"
        href={bagUrl}
        onClick={e => hasDropdown && e.preventDefault()}
        onKeyDown={e => {
          if (keyCode(e) === ENTER_KEY) {
            window.location.assign(bagUrl);
            e.preventDefault();
          }
        }}
        icon={bagIconName}
        data-testid="bagIcon"
        className={styles.widgetButton}
        aria-label={this.props.formatTranslation("Icon.Bag")}
      >
        {noOfBagItems && (
          <span className={styles.noOfBagItems}>{noOfBagItems}</span>
        )}
      </IconButton>
    );

    return (
      <Widget>
        {!isBagPage &&
        viewport !== SMALL_VIEWPORT &&
        miniBagToggle &&
        noOfBagItems ? (
          <Dropdown
            name={MINIBAG}
            header={<MiniBagHeader />}
            body={<MiniBag />}
            footer={<MiniBagFooter />}
            isKeyboardAccessible={false}
          >
            {bagIcon(true)}
          </Dropdown>
        ) : (
          <CSSTransition
            in={this.state.isBagIconAnimating}
            timeout={1000}
            classNames="bounce"
            onEntered={this.toggleAnimation}
          >
            {bagIcon()}
          </CSSTransition>
        )}
      </Widget>
    );
  };

  savedItemsWidget = () => (
    <Widget>
      <IconButton
        type="a"
        href={this.props.defaultStoreUrl.concat(
          this.props.formatTranslation("SavedItems.Link"),
          trackingQuery
        )}
        icon={
          this.props.prideToggle
            ? `heartPrideFilled`
            : this.props.hasSavedItems ? `heartFilled` : `heartUnfilled`
        }
        data-testid="savedItemsIcon"
        className={styles.widgetButton}
        aria-label={this.props.formatTranslation("Icon.SavedItems")}
      />
    </Widget>
  );

  render() {
    return (
      <ul className={styles.container} data-testid="widgets">
        {this.searchWidget()}
        {this.accountWidget()}
        {this.savedItemsWidget()}
        {this.bagWidget()}
      </ul>
    );
  }
}

Widgets.propTypes = {
  openSearch: PropTypes.func.isRequired,
  isReconsentRequired: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  getSavedItemsFromSDK: PropTypes.func.isRequired,
  hasSavedItems: PropTypes.bool.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  noOfBagItems: PropTypes.number,
  countryCode: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  keyStoreDataversion: PropTypes.string.isRequired,
  storeCode: PropTypes.string.isRequired,
  defaultStoreUrl: PropTypes.string.isRequired,
  isUpdated: PropTypes.bool,
  viewport: viewportPropType,
  miniBagToggle: PropTypes.bool,
  prideToggle: PropTypes.bool
};

export default withTranslation(Widgets);
