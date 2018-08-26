import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import getDefaultCountry from "../getDefaultCountry";
import getBrowseCountry from "../getBrowseCountry";

var lc = function lc(str) {
  return str && str.toLowerCase();
};

var getIsCountryValidForDomain = function getIsCountryValidForDomain(country, defaultCountry, defaultCountries) {
  var validStoreCodes = defaultCountries.filter(function (country) {
    return country.url === defaultCountry.url;
  }).map(function (country) {
    return country.storeCode;
  });

  return validStoreCodes.includes(country.storeCode);
};

/*
 * @returns {Country} country
 */
export default function getCountry(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, getCountryCollections, request, response, lang, _ref2, majorCountries, defaultCountries, defaultCountry, browseCountry, candidateCountry;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              getCountryCollections = params.getCountryCollections, request = params.request, response = params.response, lang = params.lang;
              _context.next = 4;
              return getCountryCollections({
                request: request,
                response: response,
                lang: lang
              });

            case 4:
              _ref2 = _context.sent;
              majorCountries = _ref2.majorCountries;
              defaultCountries = _ref2.defaultCountries;
              defaultCountry = getDefaultCountry(request, defaultCountries);
              browseCountry = lc(getBrowseCountry(request));

              if (browseCountry) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", defaultCountry);

            case 11:
              candidateCountry = majorCountries.find(function (country) {
                return lc(country.countryCode) === browseCountry;
              });

              if (candidateCountry) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", defaultCountry);

            case 14:
              if (getIsCountryValidForDomain(candidateCountry, defaultCountry, defaultCountries)) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", defaultCountry);

            case 16:
              return _context.abrupt("return", candidateCountry);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
