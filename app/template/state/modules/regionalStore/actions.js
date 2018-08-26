import { SET_KEY_STORE_DATA_VERSION, SET_BROWSE_CURRENCY } from "./constants";

export const setKeyStoreDataversion = keyStoreDataversion => ({
  type: SET_KEY_STORE_DATA_VERSION,
  payload: keyStoreDataversion
});

export const setBrowseCurrency = currency => ({
  type: SET_BROWSE_CURRENCY,
  payload: currency
});
