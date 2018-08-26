export default function generateSecureUrl(countryCode, isTestUrl, isComStoreURL) {
  var baseUrl = void 0;
  if (isTestUrl) {
    baseUrl = "https://secure.asosservices.com";
  } else {
    baseUrl = "https://secure.asos.com";
  }

  if (isComStoreURL) return baseUrl;

  var secureUrl = countryCode ? baseUrl + "/" + countryCode.toLowerCase() : baseUrl;

  return secureUrl;
}
