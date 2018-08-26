import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign2 from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { getBrowseSizeSchema } from "../../utils/cookies/server";

/*
 * @param {Country} country
 *
 * @returns {SizeSchema} sizeSchema
 */
var getDefaultSizeSchemaForCountry = function getDefaultSizeSchemaForCountry(country) {
  return country.sizeSchemas.find(function (sizeSchema) {
    return sizeSchema.isPrimary;
  });
};

/*
 * @param {string} browseSizeSchema
 * @param {Country} country
 *
 * @returns {SizeSchema} sizeSchema
 */
var getSizeSchemaIfValid = function getSizeSchemaIfValid(browseSizeSchema, country) {
  return country.sizeSchemas.find(function (_ref) {
    var sizeSchema = _ref.sizeSchema;
    return browseSizeSchema === sizeSchema;
  });
};

/*
 * @typedef {Object} SizeSchema
 * @property {string} sizeSchema
 * @property {string} text
 * @property {boolean} isPrimary
 */

/*
 * @typedef {Object} GetSizeSchemaOptions
 * @property {Function} getCountry
 * @property {Object} request
 * @property {Object} response
 */

/*
 * @async
 * @callback CurriedGetSizeSchema
 * @param {GetSizeSchemaOptions} options
 */

/*
 * @param {GetSizeSchemaOptions} initialParams
 *
 * @returns {CurriedGetSizeSchema} curriedGetSizeSchema
 */
export default function getSizeSchema(initialParams) {
  return function () {
    var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var _Object$assign, request, response, getCountry, country, browseSizeSchema, validSizeSchema;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _Object$assign = _Object$assign2({}, initialParams, callParams), request = _Object$assign.request, response = _Object$assign.response, getCountry = _Object$assign.getCountry;
              _context.next = 3;
              return getCountry({ request: request, response: response });

            case 3:
              country = _context.sent;
              browseSizeSchema = getBrowseSizeSchema(request);
              validSizeSchema = getSizeSchemaIfValid(browseSizeSchema, country);
              return _context.abrupt("return", validSizeSchema || getDefaultSizeSchemaForCountry(country));

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
