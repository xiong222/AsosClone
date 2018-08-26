import _regeneratorRuntime from "babel-runtime/regenerator";
import _Object$assign from "babel-runtime/core-js/object/assign";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import { storeServiceError } from "../../errors";
import { getTemplateVersion as getTemplateVersionCookie, setTemplateVersion as setTemplateVersionCookie } from "../cookies/server";

/*
 * @returns {string} siteChromeVersion
 */
export default function getSiteChromeVersion(initialParams) {
  return function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(callParams) {
      var params, getCountry, getVersionManifest, request, response, _ref2, storeCode, siteChromeVersionInCookie, _ref3, siteChromeVersion, permittedSiteChromeVersions, storesSiteChromeVersion, activeSiteChrome;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _Object$assign({}, initialParams, callParams);
              getCountry = params.getCountry, getVersionManifest = params.getVersionManifest, request = params.request, response = params.response;
              _context.next = 4;
              return getCountry({ request: request, response: response });

            case 4:
              _ref2 = _context.sent;
              storeCode = _ref2.storeCode;
              siteChromeVersionInCookie = getTemplateVersionCookie(request, storeCode.toLowerCase());
              _context.next = 9;
              return getVersionManifest();

            case 9:
              _ref3 = _context.sent;
              siteChromeVersion = _ref3.siteChromeVersion;
              permittedSiteChromeVersions = _ref3.permittedSiteChromeVersions;

              if (siteChromeVersion) {
                _context.next = 14;
                break;
              }

              throw storeServiceError("Could not get valid version manifest");

            case 14:
              if (!(siteChromeVersionInCookie && permittedSiteChromeVersions.includes(siteChromeVersionInCookie))) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", siteChromeVersionInCookie);

            case 16:
              storesSiteChromeVersion = siteChromeVersion[storeCode] || siteChromeVersion[storeCode.toLowerCase()] || null;

              if (!(storesSiteChromeVersion === null)) {
                _context.next = 19;
                break;
              }

              throw storeServiceError("Could not match store in the version manifest");

            case 19:
              activeSiteChrome = storesSiteChromeVersion.useCurrent ? storesSiteChromeVersion.current : storesSiteChromeVersion.previous;

              // If cookie is set but isn't permitted

              if (siteChromeVersionInCookie && request && response) {
                setTemplateVersionCookie(request, response, activeSiteChrome);
              }

              return _context.abrupt("return", activeSiteChrome);

            case 22:
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
