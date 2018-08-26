import store from './factories/store';

export { getBrowseCountry, setBrowseCountry, getBrowseCurrency, setBrowseCurrency, getBrowseLanguage, setBrowseLanguage, getBrowseSizeSchema, setBrowseSizeSchema, getCurrency, setCurrency, getFloor, setFloor, getKeyStoreDataversion, setKeyStoreDataversion, getGeoCountry, getPreferredSite, getSizeSchema, setSizeSchema, getStoreCode, setStoreCode, getTemplateVersion, setTemplateVersion, setTemplateVersions, getWelcomeMessage, setWelcomeMessage, getWelcomeMatClosedForWrongCountry, setWelcomeMatClosedForWrongCountry, getWelcomeMatClosedForCorrectCountry, setWelcomeMatClosedForCorrectCountry, clearCookies, isFirstVisit, setAffiliateId, getAffiliateId, initAsosCookie } from './utils/cookies/client';
export { desktopToMobile } from './utils/urls/desktopToMobile';
export { setHttpUrlsToHttps } from './utils/urls/setHttpUrlsToHttps';
export { getGenderByFloorId, getFloorIdByGender } from './utils/gender';
export { isMobile, isTablet, isStopMobileSet, getPlatform } from './utils/dataPlatform';
export { getStoreUrlByStoreCode } from './utils/store';
export { errors } from './errors';

export var storePresentation = function storePresentation() {
  let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    storeApiEndpoint = _ref.storeApiEndpoint,
    storeExpiryMs = _ref.storeExpiryMs,
    versionManifestEndpoint = _ref.versionManifestEndpoint,
    versionManifestExpiryMs = _ref.versionManifestExpiryMs,
    warn = _ref.warn;

  return {
    store: store.create({
      storeApiEndpoint,
      storeExpiryMs,
      versionManifestEndpoint,
      versionManifestExpiryMs,
      warn
    })
  };
};
