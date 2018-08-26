import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { getKeyStoreDataversion as getKeyStoreDataversionCookie, setKeyStoreDataversion as setKeyStoreDataversionCookie } from "../cookies/server";

export default function getKeyStoreDataversion(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, getVersionManifest, request, response, ksdvInCookie, _ref2, useCurrentKeyStoreDataversion, keyStoreDataversion, permittedKeyStoreDataversions, activeKeyStore;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              getVersionManifest = params.getVersionManifest, request = params.request, response = params.response;
              ksdvInCookie = null;

              if (request) {
                ksdvInCookie = getKeyStoreDataversionCookie(request);
              }

              _context.next = 6;
              return getVersionManifest();

            case 6:
              _ref2 = _context.sent;
              useCurrentKeyStoreDataversion = _ref2.useCurrentKeyStoreDataversion;
              keyStoreDataversion = _ref2.keyStoreDataversion;
              permittedKeyStoreDataversions = _ref2.permittedKeyStoreDataversions;

              if (!(ksdvInCookie && permittedKeyStoreDataversions.includes(ksdvInCookie))) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", ksdvInCookie);

            case 12:
              activeKeyStore = useCurrentKeyStoreDataversion ? keyStoreDataversion.current : keyStoreDataversion.previous;

              // If cookie is set but isnt permitted

              if (ksdvInCookie && response) {
                setKeyStoreDataversionCookie(response, activeKeyStore);
              }

              return _context.abrupt("return", activeKeyStore);

            case 15:
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
