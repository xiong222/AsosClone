import { MOBILE, DESKTOP } from "../dataPlatform/index";
import testStoreUrls from "./stores.json";
import prodStoreUrls from "./stores-prod.json";
import { storeServiceError } from "../../errors";

var normalise = function normalise(_ref) {
  var storeCode = _ref.storeCode,
    _ref$gender = _ref.gender,
    gender = _ref$gender === undefined ? "default" : _ref$gender,
    isMobile = _ref.isMobile,
    environmentMode = _ref.environmentMode;
  return {
    storeCode: storeCode.toLowerCase(),
    platform: isMobile ? MOBILE : DESKTOP,
    gender: ["women", "men", "default", "secure"].includes(gender) ? gender : "default",
    storeUrls: environmentMode === "prod" ? prodStoreUrls : testStoreUrls
  };
};

export var getStoreUrlByStoreCode = function getStoreUrlByStoreCode(options) {
  var _normalise = normalise(options),
    storeCode = _normalise.storeCode,
    platform = _normalise.platform,
    gender = _normalise.gender,
    storeUrls = _normalise.storeUrls;

  if (!storeUrls.hasOwnProperty(storeCode)) {
    throw storeServiceError("Invalid storeCode " + storeCode);
  }
  return storeUrls[storeCode][platform][gender];
};
