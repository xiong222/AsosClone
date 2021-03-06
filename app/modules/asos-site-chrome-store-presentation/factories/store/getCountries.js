/*
import _regeneratorRuntime from 'babel-runtime/regenerator';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import { storeServiceError } from '../../errors';
*/
/*
 * @returns {Country[]} countries
 */
export default function getCountries(initialParams) {
  return async function test() {
    return [];
  };
}
/*
export default function getCountries(initialParams) {

  return (function () {

    const _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      let params,
        getCountryCollections,
        request,
        response,
        lang,
        _ref2,
        countries;

      return _regeneratorRuntime.wrap((_context) => {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              getCountryCollections = params.getCountryCollections, request = params.request, response = params.response, lang = params.lang;
              _context.next = 4;
              return getCountryCollections({
                request,
                response,
                lang
              });

            case 4:
              _ref2 = _context.sent;
              countries = _ref2.countries;

              if (!countries) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('return', countries);

            case 10:
              throw storeServiceError('Countries was not calculated correctly');

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };

  }());

}
*/
