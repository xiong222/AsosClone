import request from './request';
import { getContext } from '../client/context';
import logger from '../helpers/logger';
import {
  getSuggestionsUrl,
  getCountryUrl,
  getPaymentProviderUrl,
  getWelcomeMessageUrl,
  getWelcomeMatUrl,
  getPreferencesUrl
} from './apiUrls';
import clientConfig from '../template/clientConfig';
import env from '../env';
import 'isomorphic-fetch';

const getIsRunningOnServer = () => clientConfig.isServer();

export { default as fetchClientNavigation } from './fetchClientNavigation';
export { default as fetchNavigation } from './fetchNavigation';

export const fetchSuggestions = (siteId, lang, query, country) => {
  const url = getSuggestionsUrl(siteId, lang, query, country);

  logger.info(`(${siteId}) - Fetching navigation from ${url}`);
  return request(url);
};

export const fetchCountry = (country, lang, platform) => {
  const url = getCountryUrl(country, lang, platform);
  logger.info(`Fetching country data for ${country} from ${url}`);
  return request(url);
};

export const fetchPaymentProviders = (keyStoreDataversion) => {
  const url = getPaymentProviderUrl({ keyStoreDataversion });
  logger.info(`Fetching payment providers from ${url}`);
  return request(url);
};

export const fetchWelcomeMessage = (
  browseCountry,
  platform,
  keyStoreDataversion
) => {
  const context = getContext();
  const geoCountry = context && context.getGeoCountry();

  const url = getWelcomeMessageUrl(
    geoCountry,
    browseCountry,
    platform,
    keyStoreDataversion
  );
  logger.info(`Fetching welcome message for ${geoCountry} from ${url}`);
  return request(url);
};

export const fetchWelcomeMat = (
  browseCountry,
  platform,
  keyStoreDataversion
) => {
  const context = getContext();
  const geoCountry = context && context.getGeoCountry();

  const url = getWelcomeMatUrl(
    geoCountry,
    browseCountry,
    platform,
    keyStoreDataversion
  );
  logger.info(`Fetching welcome mat for ${geoCountry} from ${url}`);
  return request(url);
};

export const fetchSitecoreBearerToken = () => {
  const {
    SITECORE_LOGIN_URL: url,
    SITECORE_LOGIN_USER: username,
    SITECORE_LOGIN_PASS: password,
    SITECORE_LOGIN_DOMAIN: domain
  } = process.env;
  const body = JSON.stringify({
    username,
    password,
    domain
  });
  const method = 'POST';
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  return request(url, { method, headers, body });
};

export async function updatePreferences(customerGuid, preferences) {
  const url = getPreferencesUrl(customerGuid);
  logger.info(
    `Patching preferences for customer '${customerGuid}' from '${url}'`
  );
  const body = JSON.stringify({
    sourceReason: 'SiteChrome',
    services: {
      marketing: preferences
    }
  });
  const method = 'PATCH';
  const headers = new Headers({
    'asos-c-name': 'asos-web-site-chrome',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${await window.__sdk.identity.getAccessToken()}`
  });

  return fetch(url, {
    method,
    headers,
    body
  });
}

export const fetchPreferences = (country, lang) => {
  const url = getPreferencesUrl(null, {
    lang,
    country
  });
  logger.info(`Fetching preferences for system from '${url}'`);

  return request(url);
};

export const fetchFeaturesManifest = () => request(env('FEATURES_MANIFEST_JSON'));

export const sendEventToAlfred = (event, url) => {
  const method = 'POST';
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const body = JSON.stringify(event);
  return request(
    url,
    { method, headers, body },
    getIsRunningOnServer()
  ).catch((e) => {
    console.error('Alfred event failed', e);
  });
};

