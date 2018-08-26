import _regeneratorRuntime from "babel-runtime/regenerator";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";

var handleError = function () {
  var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(response, url) {
    var information, errorResponse, status;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            information = void 0, errorResponse = void 0, status = void 0;
            _context2.prev = 1;

            status = response.status;
            _context2.next = 5;
            return response.json();

          case 5:
            information = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);

            errorResponse = _context2.t0;

          case 11:
            throw storeServiceError("Failed to fetch", {
              url: url,
              status: status,
              information: information,
              errorResponse: errorResponse
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 8]]);
  }));

  return function handleError(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/* global fetch */
import "isomorphic-fetch";
import { storeServiceError } from "../../errors";

export default (function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url) {
    var response;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = void 0;
            _context.prev = 1;
            _context.next = 4;
            return fetch(url);

          case 4:
            response = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", handleError(response, url));

          case 10:
            if (!(response.status >= 400)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", handleError(response, url));

          case 12:
            return _context.abrupt("return", response);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  function wrappedFetch(_x) {
    return _ref.apply(this, arguments);
  }

  return wrappedFetch;
})();
