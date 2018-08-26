import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
/*
 * @returns {boolean} useSiteChrome
 */
export default function getUseSiteChrome(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, getSiteChromeVersion, request, response, siteChromeVersion;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              getSiteChromeVersion = params.getSiteChromeVersion, request = params.request, response = params.response;
              _context.next = 4;
              return getSiteChromeVersion({ request: request, response: response });

            case 4:
              siteChromeVersion = _context.sent;
              return _context.abrupt("return", !["1", "2"].includes(String(siteChromeVersion)));

            case 6:
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
