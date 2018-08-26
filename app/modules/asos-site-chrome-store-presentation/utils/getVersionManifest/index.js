import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import wrappedFetch from "../wrappedFetch";
import { storeServiceError } from "../../errors";

/*
 * @typedef {Object} SiteChromeVersion
 * @property {boolean} useCurrent
 * @property {string} current
 * @property {string} previous
 */

/*
 * @typedef {Object} VersionManifest
 * @property {string[]} permittedKeyStoreDataversions
 * @property {boolean} useCurrentKeyStoreDataversion
 * @property {{ current: string, previous: string }} keyStoreDataversion
 * @property {string[]} permittedSiteChromeVersions
 * @property {Object.<string, SiteChromeVersion>} siteChromeVersion
 */

/*
 * @returns {VersionManifest} versionManifest
 */
export default function getVersionManifest(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, cache, versionManifestEndpoint, warn, response, json;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              cache = params.cache, versionManifestEndpoint = params.versionManifestEndpoint, warn = params.warn;

              if (!(cache.hasKey(versionManifestEndpoint) && !cache.hasExpired(versionManifestEndpoint))) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", cache.get(versionManifestEndpoint));

            case 4:
              _context.prev = 4;
              _context.next = 7;
              return wrappedFetch(versionManifestEndpoint);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              json = _context.sent;
              return _context.abrupt("return", cache.set(versionManifestEndpoint, json));

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);

              warn("Store presentation failed to fetch valid manifest from", versionManifestEndpoint, _context.t0);

              if (!cache.hasKey(versionManifestEndpoint)) {
                _context.next = 21;
                break;
              }

              warn("Store presentation forced to return a stale manifest cache", _context.t0);
              warn("Resetting the stale cache");

              return _context.abrupt("return", cache.set(versionManifestEndpoint, cache.get(versionManifestEndpoint)));

            case 21:
              throw storeServiceError("Could not obtain a valid manifest", _context.t0);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[4, 14]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
