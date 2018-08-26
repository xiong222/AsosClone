import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import fetch from "../../utils/wrappedFetch";
import { stringify as queryStringify } from "querystring";
import { resolve } from "url";
import enrichMinorCountries from "../../utils/enrichMinorCountries";
import formatCountries from "../../utils/formatCountries";
import createCountryCollections from "../../utils/createCountryCollections";
import { storeServiceError } from "../../errors";

export default function getCountryCollections(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, cache, endpoint, getKeyStoreDataversion, warn, request, response, lang, keyStoreDataversion, queryParams, parsedEndpoint, _response, json;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              cache = params.cache, endpoint = params.endpoint, getKeyStoreDataversion = params.getKeyStoreDataversion, warn = params.warn, request = params.request, response = params.response, lang = params.lang;
              _context.next = 4;
              return getKeyStoreDataversion({
                request: request,
                response: response
              });

            case 4:
              keyStoreDataversion = _context.sent;
              queryParams = { keyStoreDataversion: keyStoreDataversion };


              if (lang) {
                _Object$assign(queryParams, { lang: lang });
              }

              parsedEndpoint = resolve(endpoint, "?" + queryStringify(queryParams));

              if (!(cache.hasKey(parsedEndpoint) && !cache.hasExpired(parsedEndpoint))) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", cache.get(parsedEndpoint));

            case 10:
              _context.prev = 10;
              _context.next = 13;
              return fetch(parsedEndpoint);

            case 13:
              _response = _context.sent;
              _context.next = 16;
              return _response.json();

            case 16:
              json = _context.sent;
              return _context.abrupt("return", cache.set(parsedEndpoint, createCountryCollections(formatCountries(enrichMinorCountries(json), keyStoreDataversion))));

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](10);

              warn("Store presentation failed to fetch fresh stores", _context.t0);

              if (!cache.hasKey(parsedEndpoint)) {
                _context.next = 27;
                break;
              }

              warn("Store presentation forced to return stale stores cache", _context.t0);
              warn("Resetting the stale cache");
              return _context.abrupt("return", cache.set(parsedEndpoint, cache.get(parsedEndpoint)));

            case 27:
              throw storeServiceError("Could not obtain stores", _context.t0);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[10, 20]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
