import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { getKeyStoreDataversion as getKeyStoreDataversionCookie } from "../cookies/server";

/*
 * @returns {boolean} shouldUseHttps
 */
export default function shouldUseHttps(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, request, getVersionManifest, _ref2, features, httpsFlag;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              request = params.request, getVersionManifest = params.getVersionManifest;
              _context.next = 4;
              return getVersionManifest();

            case 4:
              _ref2 = _context.sent;
              features = _ref2.features;
              httpsFlag = features["gbl-should-use-https"];

              if (!httpsFlag) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", true);

            case 9:
              if (!request) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", getKeyStoreDataversionCookie(request) === "f9hk2j3-10");

            case 11:
              return _context.abrupt("return", false);

            case 12:
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
