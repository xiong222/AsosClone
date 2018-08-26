import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { stringify as queryStringify } from "querystring";
import fetch from "../../utils/wrappedFetch";
import enrichMinorCountries from "../../utils/enrichMinorCountries";
import formatCountries from "../../utils/formatCountries";
import createCountryCollections from "../../utils/createCountryCollections";
import { storeServiceError } from "../../errors";
import setProtocol from "../../utils/urls/setProtocol";
import modifyUrlForGender from "../../utils/urls/modifyUrlForGender";
import generateSecureUrl from "../../utils/urls/generateSecureUrl";
import generateMobileUrl from "../../utils/urls/generateMobileUrl";
import isTestUrl from "../../utils/urls/isTestUrl";
import isComStoreURL from "../../utils/urls/isComStoreURL";

export default function getStoreUrlByCountryCode(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, countryCode, keyStoreDataversion, _params$type, type, _params$shouldUseHttp, shouldUseHttps, _params$includeProtoc, includeProtocol, _params$isMobile, isMobile, cache, storeApiEndpoint, warn, queryParams, parsedEndpoint, response, json, _cache$get, majorCountries, country, url, urlIsTest, urlisComStoreURL, defaultLanguage, languageShort;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              countryCode = params.countryCode, keyStoreDataversion = params.keyStoreDataversion, _params$type = params.type, type = _params$type === undefined ? "default" : _params$type, _params$shouldUseHttp = params.shouldUseHttps, shouldUseHttps = _params$shouldUseHttp === undefined ? false : _params$shouldUseHttp, _params$includeProtoc = params.includeProtocol, includeProtocol = _params$includeProtoc === undefined ? false : _params$includeProtoc, _params$isMobile = params.isMobile, isMobile = _params$isMobile === undefined ? false : _params$isMobile, cache = params.cache, storeApiEndpoint = params.storeApiEndpoint, warn = params.warn;

              if (!(!countryCode || !keyStoreDataversion)) {
                _context.next = 4;
                break;
              }

              throw storeServiceError("countryCode and keyStoreDataversion are required");

            case 4:
              queryParams = { keyStoreDataversion: keyStoreDataversion };
              parsedEndpoint = storeApiEndpoint + "?" + queryStringify(queryParams);

              if (!(!cache.hasKey(parsedEndpoint) || cache.hasExpired(parsedEndpoint))) {
                _context.next = 22;
                break;
              }

              _context.prev = 7;
              _context.next = 10;
              return fetch(parsedEndpoint);

            case 10:
              response = _context.sent;
              _context.next = 13;
              return response.json();

            case 13:
              json = _context.sent;

              cache.set(parsedEndpoint, createCountryCollections(formatCountries(enrichMinorCountries(json), keyStoreDataversion)));
              _context.next = 22;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](7);

              warn("Store presentation failed to fetch fresh stores", _context.t0);

              /* Disabling this line, since it is tested but since it
              * throws istanbul doesn't detect it as tested */
              /* istanbul ignore next */

              if (cache.hasKey(parsedEndpoint)) {
                _context.next = 22;
                break;
              }

              throw storeServiceError("Could not obtain stores", _context.t0);

            case 22:
              _cache$get = cache.get(parsedEndpoint), majorCountries = _cache$get.majorCountries;
              country = majorCountries.find(function (c) {
                return c.countryCode === countryCode;
              });
              url = country.url;
              urlIsTest = isTestUrl(url);
              urlisComStoreURL = isComStoreURL(url);

              if (!(type === "secure")) {
                _context.next = 29;
                break;
              }

              return _context.abrupt("return", generateSecureUrl(country.countryCode, urlIsTest, urlisComStoreURL));

            case 29:

              if (isMobile) {
                url = generateMobileUrl(country.countryCode, urlIsTest, urlisComStoreURL);
              }

              if (includeProtocol) {
                url = setProtocol(url, shouldUseHttps);
              }

              if (type === "women" || type === "men") {
                defaultLanguage = country.languages.find(function (language) {
                  return language.isPrimary;
                });
                languageShort = defaultLanguage.languageShort;

                url = modifyUrlForGender(type, languageShort, url);
              }

              return _context.abrupt("return", url);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[7, 17]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
