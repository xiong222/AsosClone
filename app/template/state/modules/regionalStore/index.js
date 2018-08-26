import {
  SET_KEY_STORE_DATA_VERSION,
  SET_BROWSE_CURRENCY,
  KSDV_PROPS_OVERWRITE
} from './constants';

const initialState = {
  storeUrls: {}
};

export { setKeyStoreDataversion, setBrowseCurrency } from './actions';

export {
  getStore,
  getSocialLinks,
  getCountryName,
  getCountryCode,
  getCountryFlag,
  getDefaultLanguage,
  getDefaultStoreUrl,
  getSearchUrl,
  getStoreUrlForWomen,
  getStoreUrlForMen,
  getSecureStoreUrl,
  getStoreCode,
  getKeyStoreDataversion,
  getDefaultSizeSchema,
  getDefaultCurrency,
  getCurrency,
  getDefaultCountry,
  getPaymentProviders,
  getSiteId,
  getCurrencies,
  getCurrencyId,
  isCorrectCountry
} from './selectors';

const ksdvOverrides = (variants) =>
  Object.keys(variants).reduce((overrides, key) => {
    if (KSDV_PROPS_OVERWRITE.includes(key)) {
      overrides[key] = variants[key];
    }
    return overrides;
  }, {});

export const getRegionalStoreVariant = (state, keyStoreDataversion) =>
  state.variants &&
  state.variants[keyStoreDataversion] &&
  ksdvOverrides(state.variants[keyStoreDataversion]);

export default (state = initialState, action) => {
  const keyStoreDataversion = action.payload;
  switch (action.type) {
    case SET_KEY_STORE_DATA_VERSION:
      return {
        ...state,
        keyStoreDataversion,
        ...getRegionalStoreVariant(state, keyStoreDataversion)
      };
    case SET_BROWSE_CURRENCY:
      return {
        ...state,
        browseCurrency: action.payload
      };
  }
  return state;
};
