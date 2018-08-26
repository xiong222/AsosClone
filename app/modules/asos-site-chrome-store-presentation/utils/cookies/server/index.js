import { invalidArgumentError } from "../../../errors";
import { getKeyedCookieValue, setKeyedCookieValue, getCookieValue, setCookieValue } from "./cookieReadingAndWriting";
import { getGenderByFloorId, getFloorIdByGender } from "../../gender";
import cookiesMap from "../cookiesMap";

var oneHourInSeconds = 60 * 60;

var FloorCookieName = cookiesMap.FloorCookieName,
  AsosCookieName = cookiesMap.AsosCookieName,
  SizeSchemaKey = cookiesMap.SizeSchemaKey,
  PreferredSiteKey = cookiesMap.PreferredSiteKey,
  TopCatIdKey = cookiesMap.TopCatIdKey,
  BrowseCountryKey = cookiesMap.BrowseCountryKey,
  KeyStoreDataversionKey = cookiesMap.KeyStoreDataversionKey,
  TemplateVersionKey = cookiesMap.TemplateVersionKey,
  BrowseCurrencyKey = cookiesMap.BrowseCurrencyKey,
  BrowseSizeSchemaKey = cookiesMap.BrowseSizeSchemaKey,
  BrowseLanguageKey = cookiesMap.BrowseLanguageKey;


export var getSizeSchema = function getSizeSchema(req) {
  return getKeyedCookieValue(req, AsosCookieName, SizeSchemaKey);
};

export var setSizeSchema = function setSizeSchema(req, res, sizeSchema) {
  if (!sizeSchema) {
    throw invalidArgumentError("Invalid argument: sizeSchema cannot be empty");
  }
  setKeyedCookieValue(req, res, AsosCookieName, SizeSchemaKey, sizeSchema);
};

export var getFloor = function getFloor(req) {
  return getGenderByFloorId(getCookieValue(req, FloorCookieName));
};

export var setFloor = function setFloor(req, res, gender) {
  if (!gender) {
    throw invalidArgumentError("Invalid argument: gender cannot be empty");
  }
  var floorId = getFloorIdByGender(gender);
  if (floorId) {
    setCookieValue(res, FloorCookieName, floorId);
    setKeyedCookieValue(req, res, AsosCookieName, TopCatIdKey, floorId);
  }
};

export var getPreferredSite = function getPreferredSite(req) {
  return getKeyedCookieValue(req, AsosCookieName, PreferredSiteKey);
};

export var isFirstVisit = function isFirstVisit(req) {
  return !getPreferredSite(req);
};

export var getBrowseCountry = function getBrowseCountry(req) {
  return getCookieValue(req, BrowseCountryKey);
};

export var clearCookies = function clearCookies(res) {
  res.clearCookie(AsosCookieName);
  res.clearCookie(FloorCookieName);
};

export var getKeyStoreDataversion = function getKeyStoreDataversion(req) {
  return getCookieValue(req, KeyStoreDataversionKey);
};

export var setKeyStoreDataversion = function setKeyStoreDataversion(res, value) {
  return setCookieValue(res, KeyStoreDataversionKey, value, {
    maxAge: oneHourInSeconds
  });
};

export var getTemplateVersion = function getTemplateVersion(req, storeCode) {
  return getKeyedCookieValue(req, TemplateVersionKey, storeCode);
};

export var setTemplateVersion = function setTemplateVersion(req, res, storeCode, value) {
  return setKeyedCookieValue(req, res, TemplateVersionKey, storeCode, value, {
    maxAge: oneHourInSeconds
  });
};

export var getBrowseCurrency = function getBrowseCurrency(req) {
  return [req.query[BrowseCurrencyKey] || null, getCookieValue(req, BrowseCurrencyKey)].find(function (currencyCode) {
    return currencyCode !== null;
  }) || null;
};

export var getBrowseSizeSchema = function getBrowseSizeSchema(req) {
  return getCookieValue(req, BrowseSizeSchemaKey);
};

export var getBrowseLanguage = function getBrowseLanguage(req) {
  return getCookieValue(req, BrowseLanguageKey);
};

export default {
  getSizeSchema: getSizeSchema,
  setSizeSchema: setSizeSchema,
  getFloor: getFloor,
  setFloor: setFloor,
  getPreferredSite: getPreferredSite,
  isFirstVisit: isFirstVisit,
  clearCookies: clearCookies,
  getBrowseCurrency: getBrowseCurrency
};
