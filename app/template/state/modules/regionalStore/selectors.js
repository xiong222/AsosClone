import { createSelector } from "reselect";
import { getCurrentGender } from "../layout/selectors";
import { getContext } from "../../../../client/context";
import { DEFAULT, MALE, FEMALE, SECURE } from "../layout";
import { SEARCH_PATH } from "./constants";
import removeProtocolFromUrl from "../../../helpers/removeProtocolFromUrl";
import {DEFAULT_STATE} from "../constants";
export const getStore = state => {
  // state.regionalStore;
  return state.regionalStore;
};

export const getSocialLinks = createSelector(
  getStore,
  getCurrentGender,
  (store, gender) => store.socialLinks[gender]
);

export const getCountryName = createSelector(
  getStore,
  store => store.countryName
);

export const getCountryCode = createSelector(
  getStore,
  store => store.countryCode
);

export const isCorrectCountry = createSelector(getStore, store => {
  const context = getContext();
  const geoCountry = context && context.getGeoCountry();
  return geoCountry === store.countryCode;
});

export const getCountryFlag = createSelector(
  getStore,
  store => store.countryFlag
);

export const getDefaultLanguage = createSelector(
  getStore,
  store => store.defaultLanguage
);

export const getDefaultStoreUrl = createSelector(
  getStore,
  store => store.storeUrls[DEFAULT]
);

export const getSearchUrl = createSelector(
  getDefaultStoreUrl,
  url => removeProtocolFromUrl(url) + SEARCH_PATH
);

export const getStoreUrlForWomen = createSelector(
  getStore,
  store => store.storeUrls[FEMALE]
);

export const getStoreUrlForMen = createSelector(
  getStore,
  store => store.storeUrls[MALE]
);

export const getSecureStoreUrl = createSelector(
  getStore,
  store => store.storeUrls[SECURE]
);

export const getStoreCode = createSelector(getStore, store => store.storeCode);

export const getKeyStoreDataversion = createSelector(
  getStore,
  store => store.keyStoreDataversion
);

export const getDefaultSizeSchema = createSelector(
  getStore,
  store => store.defaultSizeSchema
);

export const getDefaultCurrency = createSelector(
  getStore,
  store => store.defaultCurrency
);

export const getCurrency = createSelector(
  getStore,
  getDefaultCurrency,
  (store, defaultCurrency) => store.browseCurrency || defaultCurrency
);

export const getCurrencies = createSelector(
  getStore,
  store => store.currencies
);

export const getCurrencyId = createSelector(
  getCurrency,
  getCurrencies,
  (currencyCode, currencies) =>
    currencies.find(({ currency }) => currency === currencyCode).currencyId
);

export const getDefaultCountry = createSelector(
  getStore,
  store => store.defaultCountry
);

export const getPaymentProviders = createSelector(
  getStore,
  store => store.paymentProviders
);

export const getSiteId = createSelector(getStore, store => store.siteId);
