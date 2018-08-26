import { getKeyStoreDataversion as getKeyStoreDataVersionFromCookie } from '../modules/asos-site-chrome-store-presentation';

import { getContext } from '../client/context';

import clientConfig from '../template/clientConfig';
import { stringify } from 'query-string';

/* These are going to be env vars */
import {
  SEARCH_API_SUGGESTIONS_PATH,
  COUNTRY_API_SELECTOR_PATH,
  COUNTRY_API_WELCOME_MESSAGE_PATH,
  COUNTRY_API_WELCOME_MAT_PATH,
  PAYMENT_PROVIDER_API_PATH,
  PREFERENCES_API_PATH
} from './constants';

const clientVariables = clientConfig.get();

const xSiteOrginCheck = (params) => {
  if (
    (clientConfig.isLocal() || clientConfig.isServer()) &&
    clientVariables.API_XSITEORIGIN_BASE
  ) {
    return { ...params, 'x-site-origin': clientVariables.API_XSITEORIGIN_BASE };
  }

  if (!clientConfig.isServer() && clientConfig.getXSiteOrigin()) {
    return { ...params, 'x-site-origin': clientConfig.getXSiteOrigin() };
  }

  return params;
};

const checkEmptyParams = (params) => {
  const ret = {};
  Object.keys(params).forEach((key) => {
    if (
      params[key] !== undefined &&
      params[key] !== null &&
      params[key] !== ''
    ) {
      ret[key] = params[key];
    }
  });
  return ret;
};

const getKSDV = () => {
  const context = getContext();
  if (!context) {
    return getKeyStoreDataVersionFromCookie();
  }
  return context.getKeyStoreDataversion();
};

const ensureKeyStoreDataversion = (params) =>
  (params.keyStoreDataversion
    ? params
    : { ...params, keyStoreDataversion: getKSDV() });

export const buildUrl = (origin, params = {}) => {
  params = ensureKeyStoreDataversion(params);
  params = xSiteOrginCheck(params);
  params = checkEmptyParams(params);

  const queryString = stringify(params);
  const url = origin + (queryString ? `?${queryString}` : '');
  return url;
};

export const getSuggestionsUrl = (siteId, lang, query, country) => {
  const params = {
    store: siteId, lang, q: query, country, limit: 10
  };
  const baseUrl = `${clientVariables.API_BASE}${SEARCH_API_SUGGESTIONS_PATH}`;
  return buildUrl(baseUrl, params);
};

export const getNavigationUrl = (params) => {
  const { API_BASE, NAVIGATION_API_PATH } = clientVariables;
  const baseUrl = `${API_BASE}${NAVIGATION_API_PATH}`;
  return buildUrl(baseUrl, params);
};

export const getNavigationSubtreeUrl = (params) => {
  const { API_BASE, NAVIGATION_SUBTREE_API_PATH } = clientVariables;
  const baseUrl = `${API_BASE}${NAVIGATION_SUBTREE_API_PATH}`;
  return buildUrl(baseUrl, params);
};

export const getCountryUrl = (country, lang, platform) => {
  const params = { lang, platform };
  const baseUrl = `${clientVariables.COUNTRY_API_DOMAIN}${COUNTRY_API_SELECTOR_PATH}/${country}`;
  return buildUrl(baseUrl, params);
};

export const getPaymentProviderUrl = (params) => {
  const baseUrl = `${clientVariables.COUNTRY_API_DOMAIN}${PAYMENT_PROVIDER_API_PATH}`;
  return buildUrl(baseUrl, params);
};

export const getWelcomeMessageUrl = (geoCountry, browseCountry, platform) => {
  const params = { geoCountry, browseCountry, platform };
  const baseUrl = `${clientVariables.COUNTRY_API_DOMAIN}${COUNTRY_API_WELCOME_MESSAGE_PATH}`;
  return buildUrl(baseUrl, params);
};

export const getWelcomeMatUrl = (geoCountry, browseCountry, platform) => {
  const params = { geoCountry, browseCountry, platform };
  const baseUrl = `${clientVariables.COUNTRY_API_DOMAIN}${COUNTRY_API_WELCOME_MAT_PATH}`;
  // const baseUrl = `${COUNTRY_API_WELCOME_MAT_PATH}`;
  return buildUrl(baseUrl, params);
};

export const getPreferencesUrl = (customerGuid, params = {}) => {
  params = checkEmptyParams(params);

  const queryString = stringify(params);
  const baseUrl = `${clientVariables.PREFERENCES_API_DOMAIN}${PREFERENCES_API_PATH}${customerGuid
    ? `/${customerGuid}`
    : ''}`;

  return baseUrl + (queryString ? `?${queryString}` : '');
};
