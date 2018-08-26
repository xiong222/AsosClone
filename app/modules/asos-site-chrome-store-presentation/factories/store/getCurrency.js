import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign2 from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { getBrowseCurrency } from "../../utils/cookies/server";

/*
 * @param {Country} country
 *
 * @returns {Currency} currency
 */
var getDefaultCurrencyForCountry = function getDefaultCurrencyForCountry(country) {
  return country.currencies.find(function (currency) {
    return currency.isPrimary;
  });
};

/*
 * @param {string} browseCurrency
 * @param {Country} country
 *
 * @returns {Currency} currency
 */
var getCurrencyIfValid = function getCurrencyIfValid(browseCurrency, country) {
  return country.currencies.find(function (_ref) {
    var currency = _ref.currency;
    return browseCurrency === currency;
  });
};

/*
 * @typedef {Object} Currency
 * @property {string} currency
 * @property {string} symbol
 * @property {string} text
 * @property {boolean} isPrimary
 * @property {number} currencyId
 */

/*
 * @typedef {Object} GetCurrencyOptions
 * @property {Function} getCountry
 * @property {Object} request
 * @property {Object} response
 */

/*
 * @async
 * @callback CurriedGetCurrency
 * @param {GetCurrencyOptions} options
 */

/*
 * @param {GetCurrencyOptions} initialParams
 *
 * @returns {CurriedGetCurrency} curriedGetCurrency
 */
export default function getCurrency(initialParams) {
  return function () {
    var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var _Object$assign, request, response, getCountry, country, browseCurrency, validCurrency;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _Object$assign = _Object$assign2({}, initialParams, callParams), request = _Object$assign.request, response = _Object$assign.response, getCountry = _Object$assign.getCountry;
              _context.next = 3;
              return getCountry({ request: request, response: response });

            case 3:
              country = _context.sent;
              browseCurrency = getBrowseCurrency(request);
              validCurrency = getCurrencyIfValid(browseCurrency, country);
              return _context.abrupt("return", validCurrency || getDefaultCurrencyForCountry(country));

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
