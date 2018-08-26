import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign2 from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { getBrowseLanguage } from "../../utils/cookies/server";

/*
 * @param {Country} country
 *
 * @returns {Language} language
 */
var getDefaultLanguageForCountry = function getDefaultLanguageForCountry(country) {
  return country.languages.find(function (language) {
    return language.isPrimary;
  });
};

/*
 * @param {string} browseLanguage
 * @param {Country} country
 *
 * @returns {Language} language
 */
var getLanguageIfValid = function getLanguageIfValid(browseLanguage, country) {
  return country.languages.find(function (_ref) {
    var language = _ref.language;
    return browseLanguage === language;
  });
};

/*
 * @typedef {Object} Language
 * @property {string} language
 * @property {string} name
 * @property {string} text
 * @property {string} languageShort
 * @property {boolean} isPrimary
 */

/*
 * @typedef {Object} GetLanguageOptions
 * @property {Function} getCountry
 * @property {Object} request
 * @property {Object} response
 */

/*
 * @async
 * @callback CurriedGetLanguage
 * @param {GetLanguageOptions} options
 */

/*
 * @param {GetLanguageOptions} initialParams
 *
 * @returns {CurriedGetLanguage} curriedGetLanguage
 */
export default function getLanguage(initialParams) {
  return function () {
    var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var _Object$assign, request, response, getCountry, country, browseLanguage, validLanguage;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _Object$assign = _Object$assign2({}, initialParams, callParams), request = _Object$assign.request, response = _Object$assign.response, getCountry = _Object$assign.getCountry;
              _context.next = 3;
              return getCountry({ request: request, response: response });

            case 3:
              country = _context.sent;
              browseLanguage = getBrowseLanguage(request);
              validLanguage = getLanguageIfValid(browseLanguage, country);
              return _context.abrupt("return", validLanguage || getDefaultLanguageForCountry(country));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}
