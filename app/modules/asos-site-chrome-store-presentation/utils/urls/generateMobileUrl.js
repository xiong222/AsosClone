export default function generateMobileUrl(countryCode, isTestUrl, isComStoreURL) {
  var baseUrl = void 0;
  if (isTestUrl) {
    baseUrl = "m.asosservices.com";
  } else {
    baseUrl = "m.asos.com";
  }

  if (isComStoreURL) return baseUrl;

  var mobileUrl = countryCode ? baseUrl + "/" + countryCode.toLowerCase() : baseUrl;

  return mobileUrl;
}
