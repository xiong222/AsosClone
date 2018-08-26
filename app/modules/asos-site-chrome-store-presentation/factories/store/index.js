import cacheFactory from "../cache";
import getVersionManifest from "../../utils/getVersionManifest";
import getKeyStoreDataversion from "../../utils/getKeyStoreDataversion";
import getSiteChromeVersion from "../../utils/getSiteChromeVersion";
import getUseSiteChrome from "../../utils/getUseSiteChrome";
import getCountry from "../../utils/getCountry";
import shouldUseHttps from "../../utils/shouldUseHttps";
import validate from "./validate";
import getMajorCountries from "./getMajorCountries";
import getCountryCollections from "./getCountryCollections";
import getCountries from "./getCountries";
import getDefaultCountries from "./getDefaultCountries";
import getMajorCountriesWithKSDVVariants from "./getMajorCountriesWithKSDVVariants";
import getCurrency from "./getCurrency";
import getLanguage from "./getLanguage";
import getSizeSchema from "./getSizeSchema";
import getStoreUrlByCountryCode from "./getStoreUrlByCountryCode";

var fiveMinutes = 1000 * 60 * 5;

var storeFactory = {
  create: function create() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      storeApiEndpoint = _ref.storeApiEndpoint,
      _ref$storeExpiryMs = _ref.storeExpiryMs,
      storeExpiryMs = _ref$storeExpiryMs === undefined ? fiveMinutes : _ref$storeExpiryMs,
      versionManifestEndpoint = _ref.versionManifestEndpoint,
      _ref$versionManifestE = _ref.versionManifestExpiryMs,
      versionManifestExpiryMs = _ref$versionManifestE === undefined ? fiveMinutes : _ref$versionManifestE,
      warn = _ref.warn;

    validate(storeApiEndpoint, versionManifestEndpoint, warn);

    var storeCache = cacheFactory.create({ expiryMs: storeExpiryMs });
    var versionManifestCache = cacheFactory.create({
      expiryMs: versionManifestExpiryMs
    });

    /*
     * Needs no parameters
     * @returns {VersionManifest}
     */
    var curriedGetVersionManifest = getVersionManifest({
      cache: versionManifestCache,
      versionManifestEndpoint: versionManifestEndpoint,
      warn: warn
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @returns {string} keyStoreDataversion
     */
    var curriedGetKeyStoreDataversion = getKeyStoreDataversion({
      getVersionManifest: curriedGetVersionManifest
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @param {string} lang
     * @param {Object} cache,
     * @param {string} endpoint,
     * @param {Function} getKeyStoreDataversion
     * @returns {CountryCollections} countryCollections
     */
    var curriedGetCountryCollections = getCountryCollections({
      cache: storeCache,
      endpoint: storeApiEndpoint,
      getKeyStoreDataversion: curriedGetKeyStoreDataversion,
      warn: warn
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @param {string} lang
     * @returns {Country[]} countries
     */
    var curriedGetCountries = getCountries({
      getCountryCollections: curriedGetCountryCollections
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @param {string} lang
     * @returns {Country[]} majorCountries
     */
    var curriedGetMajorCountries = getMajorCountries({
      getCountryCollections: curriedGetCountryCollections
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @param {string} lang
     * @returns {Country[]} defaultCountries
     */
    var curriedGetDefaultCountries = getDefaultCountries({
      getCountryCollections: curriedGetCountryCollections
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @param {string} lang
     * @returns {Country} country
     */
    var curriedGetCountry = getCountry({
      getCountryCollections: curriedGetCountryCollections
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @param {string} lang
     * @returns {Country[]} majorCountries
     */
    var curriedGetMajorCountriesWithKSDVVariants = getMajorCountriesWithKSDVVariants({
      getCountryCollections: curriedGetCountryCollections,
      getVersionManifest: curriedGetVersionManifest,
      getKeyStoreDataversion: curriedGetKeyStoreDataversion,
      warn: warn
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @returns {string} siteChromeVersion
     */
    var curriedGetSiteChromeVersion = getSiteChromeVersion({
      getCountry: curriedGetCountry,
      getVersionManifest: curriedGetVersionManifest
    });

    /*
     * @param {Object} request
     *        Express request
     * @param {Object} response
     *        Express response
     * @returns {boolean} useSiteChrome
     */
    var curriedGetUseSiteChrome = getUseSiteChrome({
      getSiteChromeVersion: curriedGetSiteChromeVersion
    });

    /*
     * @param {Object} options
     * @param {Object} options.request
     * @param {Object} options.response
     */
    var curriedGetCurrency = getCurrency({
      getCountry: curriedGetCountry
    });

    /*
     * @param {Object} options
     * @param {Object} options.request
     * @param {Object} options.response
     */
    var curriedGetLanguage = getLanguage({
      getCountry: curriedGetCountry
    });

    /*
     * @param {Object} options
     * @param {Object} options.request
     * @param {Object} options.response
     */
    var curriedGetSizeSchema = getSizeSchema({
      getCountry: curriedGetCountry
    });

    /*
     * @param {Function} options.request
     */
    var curriedShouldUseHttps = shouldUseHttps({
      getVersionManifest: curriedGetVersionManifest
    });

    var curriedGetStoreUrlByCountryCode = getStoreUrlByCountryCode({
      cache: storeCache,
      storeApiEndpoint: storeApiEndpoint,
      warn: warn
    });

    return {
      getCountries: curriedGetCountries,
      getMajorCountries: curriedGetMajorCountries,
      getMajorCountriesWithKSDVVariants: curriedGetMajorCountriesWithKSDVVariants,
      getDefaultCountries: curriedGetDefaultCountries,
      getCountry: curriedGetCountry,
      getKeyStoreDataversion: curriedGetKeyStoreDataversion,
      getVersionManifest: curriedGetVersionManifest,
      getSiteChromeVersion: curriedGetSiteChromeVersion,
      getUseSiteChrome: curriedGetUseSiteChrome,
      getCurrency: curriedGetCurrency,
      getLanguage: curriedGetLanguage,
      getSizeSchema: curriedGetSizeSchema,
      shouldUseHttps: curriedShouldUseHttps,
      getStoreUrlByCountryCode: curriedGetStoreUrlByCountryCode
    };
  }
};

export default storeFactory;
