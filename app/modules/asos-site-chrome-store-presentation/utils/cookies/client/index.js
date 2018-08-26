import _Object$keys from 'babel-runtime/core-js/object/keys';
import Cookies from 'js-cookie';
import { invalidArgumentError } from '../../../errors';
import { getFloorIdByGender, getGenderByFloorId } from '../../gender';
import { getKeyedCookieValue, setKeyedCookieValue, getCookieValue, setCookieValue } from './cookieReadingAndWriting';

import cookiesMap from '../cookiesMap';

let BrowseCountryKey = cookiesMap.BrowseCountryKey,
  FloorCookieName = cookiesMap.FloorCookieName,
  AsosCookieName = cookiesMap.AsosCookieName,
  CurrencyCookieName = cookiesMap.CurrencyCookieName,
  CurrencyIdKey = cookiesMap.CurrencyIdKey,
  CurrencyLabelKey = cookiesMap.CurrencyLabelKey,
  SizeSchemaKey = cookiesMap.SizeSchemaKey,
  PreferredSiteKey = cookiesMap.PreferredSiteKey,
  TopCatIdKey = cookiesMap.TopCatIdKey,
  WelcomeMessage = cookiesMap.WelcomeMessage,
  BrowseCurrencyKey = cookiesMap.BrowseCurrencyKey,
  BrowseLanguageKey = cookiesMap.BrowseLanguageKey,
  BrowseSizeSchemaKey = cookiesMap.BrowseSizeSchemaKey,
  StoreCodeKey = cookiesMap.StoreCodeKey,
  TemplateVersionKey = cookiesMap.TemplateVersionKey,
  GeoCountryKey = cookiesMap.GeoCountryKey,
  KeyStoreDataversionKey = cookiesMap.KeyStoreDataversionKey,
  AffiliateCookieName = cookiesMap.AffiliateCookieName,
  AffiliateKey = cookiesMap.AffiliateKey,
  WelcomeMatWrong = cookiesMap.WelcomeMatWrong,
  WelcomeMatCorrect = cookiesMap.WelcomeMatCorrect;


const defaultCurrency = -1;

const thirtyDays = 30;
const inOneHour = 1 / 24;
const oneWeek = 7;
const oneYear = 365;

export var getBrowseCountry = function getBrowseCountry() {
  return getCookieValue(BrowseCountryKey);
};
export var setBrowseCountry = function setBrowseCountry(country) {
  return setCookieValue(BrowseCountryKey, country);
};

export var getCurrency = function getCurrency() {
  const currencyId = getKeyedCookieValue(AsosCookieName, CurrencyIdKey);
  const currencyLabel = getKeyedCookieValue(AsosCookieName, CurrencyLabelKey);

  return {
    currencyId: parseInt(currencyId) || defaultCurrency,
    currencyLabel
  };
};

export var setCurrency = function setCurrency(_ref) {
  let currencyCode = _ref.currencyCode,
    currencyId = _ref.currencyId;

  currencyCode = 'USD';
  currencyId = 1;

  if (!currencyId || isNaN(currencyId)) throw invalidArgumentError('Invalid argument: currencyId needs to be a number');

  if (!currencyCode) throw invalidArgumentError('Invalid argument: currencyCode cannot be empty');

  setKeyedCookieValue(AsosCookieName, CurrencyIdKey, currencyId);
  setKeyedCookieValue(AsosCookieName, CurrencyLabelKey, currencyCode);

  // legacy cookie
  setCookieValue(CurrencyCookieName, currencyId);
};

export var getSizeSchema = function getSizeSchema() {
  return getKeyedCookieValue(AsosCookieName, SizeSchemaKey);
};

export var setSizeSchema = function setSizeSchema(sizeSchema) {
  if (!sizeSchema) {
    throw invalidArgumentError('Invalid argument: sizeSchema cannot be empty');
  }
  setKeyedCookieValue(AsosCookieName, SizeSchemaKey, sizeSchema);
};

export var getFloor = function getFloor() {
  return getGenderByFloorId(getCookieValue(FloorCookieName));
};

export var setFloor = function setFloor(gender) {
  if (!gender) {
    throw invalidArgumentError('Invalid argument: gender cannot be empty');
  }
  const floorId = getFloorIdByGender(gender);
  if (floorId) {
    setCookieValue(FloorCookieName, floorId);
    setKeyedCookieValue(AsosCookieName, TopCatIdKey, floorId);
  }
};

export var getPreferredSite = function getPreferredSite() {
  return getKeyedCookieValue(AsosCookieName, PreferredSiteKey);
};

export var isFirstVisit = function isFirstVisit() {
  return !getBrowseCountry();
};

export var clearCookies = function clearCookies() {
  setCookieValue(AsosCookieName, '');
  Cookies.remove(FloorCookieName);
  Cookies.remove(WelcomeMessage);
  Cookies.remove(AffiliateCookieName);
};

export var getWelcomeMessage = function getWelcomeMessage() {
  return getCookieValue(WelcomeMessage);
};

export var setWelcomeMessage = function setWelcomeMessage(messageSeen) {
  return setCookieValue(WelcomeMessage, messageSeen);
};

export var getWelcomeMatClosedForWrongCountry = function getWelcomeMatClosedForWrongCountry() {
  return getCookieValue(WelcomeMatWrong);
};

export var setWelcomeMatClosedForWrongCountry = function setWelcomeMatClosedForWrongCountry(value) {
  return setCookieValue(WelcomeMatWrong, value, oneWeek);
};

export var getWelcomeMatClosedForCorrectCountry = function getWelcomeMatClosedForCorrectCountry() {
  return getCookieValue(WelcomeMatCorrect);
};

export var setWelcomeMatClosedForCorrectCountry = function setWelcomeMatClosedForCorrectCountry(value) {
  return setCookieValue(WelcomeMatCorrect, value, oneYear);
};

export var setBrowseCurrency = function setBrowseCurrency(val) {
  return setCookieValue(BrowseCurrencyKey, val);
};
export var setBrowseLanguage = function setBrowseLanguage(val) {
  return setCookieValue(BrowseLanguageKey, val);
};
export var setBrowseSizeSchema = function setBrowseSizeSchema(val) {
  return setCookieValue(BrowseSizeSchemaKey, val);
};
export var setStoreCode = function setStoreCode(val) {
  return;
  return setCookieValue(StoreCodeKey, val);
};
export var setTemplateVersion = function setTemplateVersion(storeCode, val) {
  return;
  return setKeyedCookieValue(TemplateVersionKey, storeCode, val, inOneHour);
};

export var setTemplateVersions = function setTemplateVersions(templateVersions) {
  return;
  const keyValuePairs = _Object$keys(templateVersions).sort().map((storeCode) => `${storeCode}=${templateVersions[storeCode]}`).join('&');

  setCookieValue(TemplateVersionKey, keyValuePairs, inOneHour);
};

export var setKeyStoreDataversion = function setKeyStoreDataversion(val) {
  return setCookieValue(KeyStoreDataversionKey, val, inOneHour);
};

export var getBrowseCurrency = function getBrowseCurrency() {
  return getCookieValue(BrowseCurrencyKey);
};
export var getBrowseLanguage = function getBrowseLanguage() {
  return getCookieValue(BrowseLanguageKey);
};
export var getBrowseSizeSchema = function getBrowseSizeSchema() {
  return getCookieValue(BrowseSizeSchemaKey);
};
export var getStoreCode = function getStoreCode() {
  return getCookieValue(StoreCodeKey);
};
export var getTemplateVersion = function getTemplateVersion(storeCode) {
  return getKeyedCookieValue(TemplateVersionKey, storeCode);
};
export var getKeyStoreDataversion = function getKeyStoreDataversion() {
  return getCookieValue(KeyStoreDataversionKey);
};

export var getGeoCountry = function getGeoCountry() {
  return getCookieValue(GeoCountryKey);
};

export var setAffiliateId = function setAffiliateId(val) {
  return setKeyedCookieValue(AffiliateCookieName, AffiliateKey, val, thirtyDays);
};
export var getAffiliateId = function getAffiliateId() {
  return getKeyedCookieValue(AffiliateCookieName, AffiliateKey);
};

export var initAsosCookie = function initAsosCookie() {
  if (!getCookieValue(AsosCookieName) && getCookieValue(AsosCookieName) !== '') {
    setCookieValue(AsosCookieName, '');
  }
};
