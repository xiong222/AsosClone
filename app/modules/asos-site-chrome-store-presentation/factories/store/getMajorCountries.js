import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { storeServiceError } from "../../errors";

/*
 * @returns {Country[]} majorCountries
 */
export default function getMajorCountries(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, getCountryCollections, request, response, lang, _ref2, majorCountries;

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

              if (!majorCountries) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", majorCountries);

            case 10:
              throw storeServiceError("Major countries was not calculated correctly");

            case 11:
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
