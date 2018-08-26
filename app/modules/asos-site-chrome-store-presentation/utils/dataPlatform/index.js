export var MOBILE = "mobile";
export var TABLET = "tablet";
export var DESKTOP = "desktop";

export var isMobile = function isMobile(req) {
  return req.get("IsMobile") === "true";
};
export var isTablet = function isTablet(req) {
  return req.get("IsTablet") === "true";
};
export var isStopMobileSet = function isStopMobileSet(req) {
  return req.query.stop_mobi === "yes";
};
export var getPlatform = function getPlatform(req) {
  switch (true) {
    case isTablet(req):
      return TABLET;
    case isMobile(req):
      return MOBILE;
    default:
      return DESKTOP;
  }
};
