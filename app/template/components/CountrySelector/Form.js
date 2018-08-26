import React, { Component } from "react";
import PropTypes from "prop-types";
import withTranslation from "../translation";
import styles from "./Form.css";
import { LANGUAGE_MAP } from "./constants";
import {
  trackSubmitCountrySelector,
  ANALYTICS_CONTEXT,
  ANALYTICS_INTERACTION_SAVED,
  ANALYTICS_POSITION_COUNTRY_SELECTOR
} from "../../../helpers/events";
import classnames from "classnames/bind";
import { getContext, setCookies } from "../../../client/context";

const cx = classnames.bind(styles);

const cleanUrl = url => {
  if (!url) return url;
  return url.replace(/&amp;/gi, "&").replace(/&#x3D;/gi, "=");
};

class Form extends Component {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
    storeCode: PropTypes.string.isRequired,
    siteId: PropTypes.number.isRequired,
    labels: PropTypes.shape({
      title: PropTypes.string.isRequired,
      countrySelect: PropTypes.string.isRequired,
      currencySelect: PropTypes.string.isRequired,
      update: PropTypes.string.isRequired
    }),
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        countryCode: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ),
    currencies: PropTypes.arrayOf(
      PropTypes.shape({
        currencyId: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ),
    propositions: PropTypes.arrayOf(PropTypes.string),
    paymentProviders: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    ),
    noOfProductsInBag: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    onCountryChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    regionalStore: PropTypes.shape({
      countryCode: PropTypes.string.isRequired,
      storeCode: PropTypes.string.isRequired,
      siteId: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      countryName: PropTypes.string.isRequired,
      sizeSchema: PropTypes.string.isRequired
    }),
    storeUrl: PropTypes.string,
    hasSetCurrencyError: PropTypes.bool,
    hasVoucherError: PropTypes.bool,
    formatTranslation: PropTypes.func.isRequired,
    sizeSchema: PropTypes.string
  };

  static defaultProps = {
    countries: [],
    currencies: [],
    propositions: [],
    paymentProviders: []
  };

  static contextTypes = {
    showWarning: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      currencyId: this.getCurrency(),
      isCurrencyUpdateManual: false
    };
  }

  handleCountryChange = e => {
    const { onCountryChange, countryCode, countries } = this.props;
    const country = countries.find(
      country => country.countryCode === e.target.value
    );

    /* istanbul ignore next */
    if (countryCode.toLowerCase() !== e.target.value.toLowerCase() && country) {
      onCountryChange(e.target.value, country.defaultLanguage);
    }
  };

  handleCurrencyChange = e => {
    if (this.state.currencyId !== Number(e.target.value)) {
      this.setState({
        currencyId: e.target.value,
        isCurrencyUpdateManual: true
      });
    }
  };

  handleCloseClick = () => {
    const { onClose } = this.props;

    onClose();
  };

  handleCloseKeyDown = e => {
    // Tab
    if (e.keyCode === 9) {
      e.preventDefault();

      if (e.shiftKey) {
        this.submitButton.focus();
      } else {
        this.countrySelect.focus();
      }
    }
  };

  handleCountryKeyDown = e => {
    // Tab && shift
    if (e.keyCode === 9 && e.shiftKey) {
      e.preventDefault();
      this.closeButton.focus();
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      countryCode,
      lang,
      currencies,
      onSubmit,
      labels,
      regionalStore,
      storeCode,
      siteId,
      storeUrl,
      countries,
      sizeSchema
    } = this.props;
    const { currencyId, isCurrencyUpdateManual } = this.state;

    const currentCurrencies = currencies
      .filter(currency => currency.currencyId == currencyId)
      .map(currency => ({
        currencyId: currency.currencyId,
        currencyCode: currency.currency
      }));
    const currentCurrency = currentCurrencies[0];

    const country = countries.find(
      country => country.countryCode === countryCode
    );
    const affiliateId = getContext() && getContext().getAffiliateId();
    const isoLanguage = lang.slice(0, 2).toLowerCase();

    trackSubmitCountrySelector({
      context: ANALYTICS_CONTEXT.countrySelector,
      interaction: ANALYTICS_INTERACTION_SAVED,
      elementText: labels.update,
      properties: {
        positionOnPage: ANALYTICS_POSITION_COUNTRY_SELECTOR,
        formFields: {
          country: {
            countryISOFrom: regionalStore.countryCode,
            countryISOTo: countryCode,
            storeFrom: regionalStore.storeCode,
            storeTo: storeCode,
            siteIDFrom: regionalStore.siteId,
            siteIDTo: siteId,
            isUpdateManual: regionalStore.countryCode !== countryCode
          },
          currency: {
            currencyISOFrom: regionalStore.currency,
            currencyISOTo: currentCurrency.currencyCode,
            isUpdateManual: isCurrencyUpdateManual
          },
          language: {
            languageISOFrom: regionalStore.language.slice(0, 2).toLowerCase(),
            languageISOTo: isoLanguage,
            languageTextFrom:
              LANGUAGE_MAP[regionalStore.language.slice(0, 2).toLowerCase()],
            languageTextTo: LANGUAGE_MAP[lang.slice(0, 2).toLowerCase()],
            isUpdateManual: false
          }
        }
      }
    });

    onSubmit(
      countryCode,
      currentCurrency.currencyCode,
      cleanUrl(storeUrl) || `//${country.url}`,
      regionalStore.countryCode,
      affiliateId
    );

    setCookies({
      browseCountry: countryCode,
      browseCurrency: currentCurrency.currencyCode,
      browseCurrencyId: currentCurrency.currencyId,
      browseLanguage: isoLanguage,
      browseSizeSchema: sizeSchema,
      storeId: storeCode
    });
  };

  shouldDisplayWarning() {
    const {
      hasSetCurrencyError,
      noOfProductsInBag,
      countryCode,
      regionalStore
    } = this.props;

    return (
      !hasSetCurrencyError &&
      noOfProductsInBag > 0 &&
      countryCode !== regionalStore.countryCode
    );
  }

  componentDidMount() {
    setTimeout(() => this.context.showWarning(this.shouldDisplayWarning()), 0);
  }

  getCurrency() {
    const { currencies, regionalStore, countryCode } = this.props;

    const currentCurrency = currencies.find(
      currency => currency.currency === regionalStore.currency
    );
    const defaultCurrency = currencies[0];

    return countryCode === regionalStore.countryCode && currentCurrency
      ? currentCurrency.currencyId
      : defaultCurrency.currencyId;
  }

  render() {
    const {
      countries,
      countryCode,
      currencies,
      formatTranslation,
      hasSetCurrencyError,
      hasVoucherError,
      labels,
      paymentProviders,
      propositions
    } = this.props;
    const { currencyId } = this.state;
    const displayWarning = this.shouldDisplayWarning();

    return (
      <section
        className={styles.container}
        data-testid="country-selector-form"
        role="dialog"
        aria-labelledby="country-title"
      >
        <h1 id="country-title" className={styles.header}>
          {labels.title}
        </h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="country" className={styles.label}>
              {labels.countrySelect}
            </label>
            {/* eslint-disable jsx-a11y/no-autofocus,jsx-a11y/no-onchange */}
            <select
              id="country"
              className={styles.select}
              autoFocus
              onChange={this.handleCountryChange}
              onKeyDown={this.handleCountryKeyDown}
              ref={c => (this.countrySelect = c)}
              defaultValue={countryCode}
            >
              {/* eslint-enable */}
              {countries.map(country => (
                <option key={country.countryCode} value={country.countryCode}>
                  {country.name}
                </option>
              ))}
            </select>
            <div className={styles.features}>
              {propositions.length > 0 && (
                <ol className={styles.propositions}>
                  {propositions.map((proposition, i) => (
                    <li key={i} className={styles.proposition}>
                      {proposition}
                    </li>
                  ))}
                </ol>
              )}
              {paymentProviders.length > 0 && (
                <ol className={styles.providers}>
                  {paymentProviders.map(provider => (
                    <li key={provider.name} className={styles.provider}>
                      <img src={provider.logo} alt={provider.name} />
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
          <div className={styles.field}>
            <label
              htmlFor="currency"
              className={cx([styles.label], {
                [styles.label__disabled]: hasSetCurrencyError
              })}
            >
              {labels.currencySelect}
            </label>
            {currencies.length > 1 ? (
              <select
                id="currency"
                className={styles.select}
                defaultValue={currencyId}
                onBlur={this.handleCurrencyChange}
                disabled={hasSetCurrencyError}
              >
                {currencies.map(currency => (
                  <option key={currency.currencyId} value={currency.currencyId}>
                    {currency.text}
                  </option>
                ))}
              </select>
            ) : (
              <span id="singleCurrency" className={styles.currency}>
                {currencies.length && currencies[0].text}
              </span>
            )}
          </div>
          {hasSetCurrencyError &&
          hasVoucherError && (
            <div className={styles.error} data-testid="currency-message">
              <p>{labels.voucherErrorMessage}</p>
            </div>
          )}
          {hasSetCurrencyError &&
          !hasVoucherError && (
            <div className={styles.error} data-testid="set-currency-message">
              <p>{formatTranslation("Errors.SomethingDoesntLookRight")}</p>
            </div>
          )}
          {!hasSetCurrencyError && (
            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.submitButton}
                data-testid="save-country-button"
                ref={c => (this.submitButton = c)}
              >
                {labels.update}
              </button>
            </div>
          )}
          {displayWarning && (
            <div className={styles.warning}>
              <p>{labels.bagErrorMessage}</p>
            </div>
          )}
          <button
            type="button"
            className={styles.closeButton}
            data-testid="close-button"
            onClick={this.handleCloseClick}
            onKeyDown={this.handleCloseKeyDown}
            ref={c => (this.closeButton = c)}
          >
            <span>Close</span>
          </button>
        </form>
      </section>
    );
  }
}

export default withTranslation(Form);
