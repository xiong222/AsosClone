import _getIterator from "babel-runtime/core-js/get-iterator";
import _regeneratorRuntime from "babel-runtime/regenerator";
import _Promise from "babel-runtime/core-js/promise";
import _Object$keys from "babel-runtime/core-js/object/keys";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { storeServiceError } from "../../errors";

/*
 * @returns {Country[]} majorCountries
 */
export default function getMajorCountriesWithKSDVVariants(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var _this = this;

      var params, getCountryCollections, getVersionManifest, getKeyStoreDataversion, request, response, lang, warn, _ref2, permittedKeyStoreDataversions, currentKSDV, countriesByKSDV, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ksdv, majorCountriesWithKSDV;

      return _regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              getCountryCollections = params.getCountryCollections, getVersionManifest = params.getVersionManifest, getKeyStoreDataversion = params.getKeyStoreDataversion, request = params.request, response = params.response, lang = params.lang, warn = params.warn;
              _context2.prev = 2;
              _context2.next = 5;
              return getVersionManifest();

            case 5:
              _ref2 = _context2.sent;
              permittedKeyStoreDataversions = _ref2.permittedKeyStoreDataversions;
              _context2.next = 9;
              return getKeyStoreDataversion({ request: request, response: response });

            case 9:
              currentKSDV = _context2.sent;
              countriesByKSDV = {};
              _loop = _regeneratorRuntime.mark(function _loop(ksdv) {
                var _ref3, majorCountries;

                return _regeneratorRuntime.wrap(function _loop$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return getCountryCollections({
                          request: request,
                          response: response,
                          lang: lang,
                          getKeyStoreDataversion: function getKeyStoreDataversion() {
                            return _Promise.resolve(ksdv);
                          }
                        });

                      case 3:
                        _ref3 = _context.sent;
                        majorCountries = _ref3.majorCountries;


                        if (majorCountries && majorCountries.length) {
                          countriesByKSDV[ksdv] = majorCountries.slice();
                        }
                        _context.next = 11;
                        break;

                      case 8:
                        _context.prev = 8;
                        _context.t0 = _context["catch"](0);

                        warn("Get country collection failed for KSDV: " + ksdv);

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _loop, _this, [[0, 8]]);
              });
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 15;
              _iterator = _getIterator(permittedKeyStoreDataversions);

            case 17:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 23;
                break;
              }

              ksdv = _step.value;
              return _context2.delegateYield(_loop(ksdv), "t0", 20);

            case 20:
              _iteratorNormalCompletion = true;
              _context2.next = 17;
              break;

            case 23:
              _context2.next = 29;
              break;

            case 25:
              _context2.prev = 25;
              _context2.t1 = _context2["catch"](15);
              _didIteratorError = true;
              _iteratorError = _context2.t1;

            case 29:
              _context2.prev = 29;
              _context2.prev = 30;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 32:
              _context2.prev = 32;

              if (!_didIteratorError) {
                _context2.next = 35;
                break;
              }

              throw _iteratorError;

            case 35:
              return _context2.finish(32);

            case 36:
              return _context2.finish(29);

            case 37:
              majorCountriesWithKSDV = countriesByKSDV[currentKSDV] || [];

              delete countriesByKSDV[currentKSDV];

              majorCountriesWithKSDV.forEach(function (country) {
                country.keyStoreDataversionVariants = _Object$keys(countriesByKSDV).reduce(function (acc, ksdv) {
                  var foundIndex = void 0;
                  var foundCountry = countriesByKSDV[ksdv].find(function (el, index) {
                    if (el.countryCode === country.countryCode) {
                      foundIndex = index;
                      return true;
                    }
                    return false;
                  });

                  if (foundCountry) {
                    acc[ksdv] = foundCountry;
                    countriesByKSDV[ksdv].splice(foundIndex, 1);
                  }

                  return acc;
                }, {});
              });

              return _context2.abrupt("return", majorCountriesWithKSDV);

            case 43:
              _context2.prev = 43;
              _context2.t2 = _context2["catch"](2);
              throw storeServiceError("Failed to getMajorCountriesWithKSDVVariants", _context2.t2);

            case 46:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, this, [[2, 43], [15, 25, 29, 37], [30,, 32, 36]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
