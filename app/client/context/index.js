import {
  getStoreCode,
  getCountryCode,
  getDefaultLanguage,
  getDefaultSizeSchema,
  setBrowseCurrency as setReduxBrowseCurrency,
  setKeyStoreDataversion as setReduxKeyStoreDataversion,
  getCurrencies,
  getStore as getRegionalStore,
  getRegionalStoreVariant
} from '../../template/state/modules/regionalStore';
import {
  setBrowseCountry,
  setBrowseCurrency,
  setBrowseLanguage,
  setBrowseSizeSchema,
  setStoreCode,
  getGeoCountry,
  setTemplateVersions,
  setKeyStoreDataversion,
  getKeyStoreDataversion,
  getAffiliateId,
  setAffiliateId,
  setCurrency
} from '../../modules/asos-site-chrome-store-presentation';
import checkForMismatch from './checkForMismatch';
import getters from './getters';
import {
  getAllSiteChromeVersions,
  getAllKeyStoreDataversions,
  getStoreCodeToSiteChromeVersionMappings,
  getSiteChromeVersionMappingsFromCookie
} from './getAllVersions';
import {
  manifestWindowKey,
  siteChromePublicWindowApi
} from '../../template/constants';
import { getCurrency } from '../../helpers/currency';
import { setKeyedCookieValue } from './cookies';
import redirectToPreferredSite from '../redirectToPreferredSite';
import templateMatchesCountry from './templateMatchesCountry';
import geoCountryMapsToCurrentStore from './geoCountryMapsToCurrentStore';
import { getParamValue } from '../../helpers/url';

const findAffiliateId = () => {
  const affiliateId = getParamValue('affid') || getParamValue('xaffid');
  const affiliateIdFromCookie = getAffiliateId();
  if (affiliateId && affiliateId !== affiliateIdFromCookie) {
    setAffiliateId(affiliateId);
    return affiliateId;
  }
  return affiliateIdFromCookie;
};

const getBrowseCurrency = (currencies) => {
  const { currency, currencyId } = getCurrency(
    parseInt(getParamValue('currencyId')),
    getParamValue('browseCurrency'),
    currencies
  );
  return {
    browseCurrency: currency,
    browseCurrencyId: currencyId
  };
};

const getSharedBaseContext = ({
  currencies,
  defaultLanguage,
  defaultSizeSchema,
  storeCode
}) => ({
  ...getBrowseCurrency(currencies),
  browseLanguage: defaultLanguage,
  browseSizeSchema: defaultSizeSchema,
  storeId: storeCode
});

const getBase = ({
  browseCountry,
  regionalStoreVariant,
  ...regionalStoreFromState
}) => {
  const affiliateId = findAffiliateId();
  const geoCountry = getGeoCountry() || browseCountry;

  const base = {
    affiliateId,
    browseCountry: browseCountry && browseCountry.toUpperCase(),
    enableStoreBasedOperation: false,
    geoCountry,
    ...getSharedBaseContext(regionalStoreFromState)
  };

  if (regionalStoreVariant) {
    return {
      ...base,
      ...getSharedBaseContext(regionalStoreVariant)
    };
  }

  return base;
};

const buildContextObject = (
  store,
  keyStoreDataversion,
  siteChromeVersions,
  latestManifest
) => {
  let contextObject = Object.assign(
    {},
    {
      keyStoreDataversion,
      templateVersion:
      siteChromeVersions.cookieValue || siteChromeVersions.templateValue
    }
  );

  const updateRegionalStore = () => {
    // update the keystoredataversion in state
    store.dispatch(
      setReduxKeyStoreDataversion(contextObject.keyStoreDataversion)
    );
    // update browseCurrency in state
    store.dispatch(setReduxBrowseCurrency(contextObject.browseCurrency));
  };

  const state = store.getState();
  const base = getBase({
    browseCountry: getCountryCode(state),
    storeCode: getStoreCode(state),
    defaultLanguage: getDefaultLanguage(state),
    defaultSizeSchema: getDefaultSizeSchema(state),
    currencies: getCurrencies(state),
    regionalStoreVariant: getRegionalStoreVariant(
      getRegionalStore(state),
      contextObject.keyStoreDataversion
    )
  });

  contextObject = {
    ...base,
    ...contextObject
  };

  if (!templateMatchesCountry(contextObject)) {
    if (geoCountryMapsToCurrentStore(getGeoCountry(), latestManifest)) {
      setBrowseCountry(getGeoCountry());
      return window.location.reload();
    }
  }

  // Set new page cookies
  setCookies(contextObject);

  // Remove browse parameters from URL
  const url = ['browseCurrency', 'browseCountry'].reduce(
    (current, value) => removeURLParameter(current, value),
    window.location.href
  );
  window.history.replaceState({}, '', url);

  // create context getters object, the external interface
  const contextGetters = getters(contextObject);

  return { context: contextGetters, updateRegionalStore };
};

const mustReload = (
  latestManifest,
  keyStoreDataversions,
  siteChromeVersions
) => {
  const storeCodeToSiteChromeVersionMappings = getStoreCodeToSiteChromeVersionMappings(
    latestManifest
  );

  const setTemplateVersionsCookie = setTemplateVersions.bind(
    null,
    storeCodeToSiteChromeVersionMappings
  );

  const setKeyStoreDataVersionCookie = setKeyStoreDataversion.bind(
    null,
    keyStoreDataversions.manifestValue
  );

  const siteChromeMismatch = checkForMismatch(
    siteChromeVersions,
    setTemplateVersionsCookie
  );

  const ksdvMismatch = checkForMismatch(
    keyStoreDataversions,
    setKeyStoreDataVersionCookie
  );

  const shouldRedirect = siteChromeMismatch || ksdvMismatch;

  return shouldRedirect;
};

const updateCookieExpiry = (latestManifest) => {
  setTemplateVersions(getSiteChromeVersionMappingsFromCookie(latestManifest));
  setKeyStoreDataversion(getKeyStoreDataversion());
};

export default function context(store) {
  const latestManifest = window[manifestWindowKey];
  const state = store.getState();

  const keyStoreDataversions = getAllKeyStoreDataversions(
    state,
    latestManifest
  );

  const keyStoreDataversion =
    keyStoreDataversions.cookieValue || keyStoreDataversions.manifestValue;

  if (redirectToPreferredSite(latestManifest, state, keyStoreDataversion)) {
    return;
  }

  const siteChromeVersions = getAllSiteChromeVersions(state, latestManifest);

  const shouldReload = mustReload(
    latestManifest,
    keyStoreDataversions,
    siteChromeVersions
  );

  updateCookieExpiry(latestManifest);

  if (shouldReload) {
    window.location.reload();
  }

  return buildContextObject(
    store,
    keyStoreDataversion,
    siteChromeVersions,
    latestManifest
  );
}

function removeURLParameter(url, parameter) {
  const urlParts = url.split('?');
  if (urlParts.length >= 2) {
    const prefix = `${encodeURIComponent(parameter)}=`;
    const parts = urlParts[1].split(/[&;]/g);

    for (let i = parts.length; i-- > 0;) {
      if (parts[i].lastIndexOf(prefix, 0) !== -1) {
        parts.splice(i, 1);
      }
    }

    return urlParts[0] + (parts.length > 0 ? `?${parts.join('&')}` : '');
  }
  return url;
}

function stripPrefSiteFromAsosCookie() {
  return;
  setKeyedCookieValue('asos', 'PreferredSite', '');
}

/*
 * @param {Object} webContext
 * @param {string} webContext.browseCountry
 * @param {string} webContext.browseCurrency
 * @param {string} webContext.browseLanguage
 * @param {string} webContext.browseSizeSchema
 * @param {string} webContext.storeId
 * @param {string} webContext.browseCurrencyId
 */
export function setCookies(webContext) {
  // true represents session cookie
  // initAsosCookie();
  stripPrefSiteFromAsosCookie();
  setBrowseCountry(webContext.browseCountry);
  setBrowseCurrency(webContext.browseCurrency);
  setBrowseLanguage(webContext.browseLanguage);
  setBrowseSizeSchema(webContext.browseSizeSchema);
  setStoreCode(webContext.storeId);
  setCurrency({
    currencyCode: webContext.browseCurrency,
    currencyId: webContext.browseCurrencyId
  });
}

export function getContext() {
  return (
    typeof window !== 'undefined' &&
    window[siteChromePublicWindowApi] &&
    window[siteChromePublicWindowApi].context
  );
}
