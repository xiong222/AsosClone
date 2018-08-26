import parse from 'url-parse';
import 'babel-polyfill';

import {
  OPEN_COUNTRY_SELECTOR,
  CLOSE_COUNTRY_SELECTOR,
  SET_COUNTRY,
  LOAD_COUNTRY,
  LOAD_CURRENCY,
  SET_CURRENCY
} from './constants';
import { SET_BAG } from '../bag';
import clientConfig from '../../../clientConfig';
import { noticeError } from '../../../../helpers/monitoring';


export const closeCountrySelector = () => ({
  type: CLOSE_COUNTRY_SELECTOR
});

export const setCountry = (country, defaultLanguage) => async (dispatch, getState, { api }) => {
  try {
    const state = getState();
    const platform = state.layout.platform;
    dispatch({ type: LOAD_COUNTRY });
    const response = await api.fetchCountry(
      country,
      defaultLanguage,
      platform
    );

    return dispatch({ type: SET_COUNTRY, payload: response.data });
  } catch (err) {
    return dispatch({ type: SET_COUNTRY, error: true, payload: err });
  }
};

export const setCurrency = async (currencyCode) => {
  if (
    window.__sdk &&
    window.__sdk.bag &&
    window.__sdk.bag.updateCurrency &&
    currencyCode
  ) {
    return window.__sdk.bag.updateCurrency(currencyCode);
  }
};

export const openCountrySelector = () => (dispatch, getState) => {
  dispatch({ type: OPEN_COUNTRY_SELECTOR });

  const { regionalStore } = getState();
  return dispatch(
    setCountry(regionalStore.countryCode, regionalStore.defaultLanguage)
  );
};


export const updatePreferences = (
  countryCode,
  currencyCode,
  storeUrl,
  initialCountryCode,
  affiliateId
) => async (dispatch) => {
  try {
    if (countryCode === initialCountryCode) {
      dispatch({ type: LOAD_CURRENCY });
      const res = await setCurrency(currencyCode);
      dispatch({ type: SET_CURRENCY });
      if (res && res.bag && res.bag.summary) {
        dispatch({ type: SET_BAG, payload: res.bag.summary });
      }
    }

    const url = parse(storeUrl || window.location.href, true);
    const xSiteOrigin = clientConfig.getXSiteOrigin();

    if (countryCode) {
      url.query = { ...url.query, browseCountry: countryCode };
    }
    if (currencyCode) {
      url.query = { ...url.query, browseCurrency: currencyCode };
    }
    if (affiliateId) {
      url.query = { ...url.query, xaffid: affiliateId };
    }
    if (xSiteOrigin) {
      url.query = { ...url.query, 'x-site-origin': xSiteOrigin };
    }
    url.query = { ...url.query, r: 1 };

    window.location.href = url.toString();
  } catch (err) {
    noticeError(err);
    dispatch({ type: SET_CURRENCY, payload: err.message, error: true });
  }
};


// WEBPACK FOOTER //
// ./template/state/modules/countrySelector/actions.js
