export default function getDefaultCountry(req, defaultCountries) {
  var com = defaultCountries.find(function (defaultCountry) {
    return defaultCountry.storeCode === "COM";
  });
  var xSiteUrn = req.get("X-SITE-URN") || com.url;

  var candidateCountries = defaultCountries.filter(function (defaultCountry) {
    return defaultCountry.url === xSiteUrn;
  });

  switch (candidateCountries.length) {
    case 0:
      return com;
    case 1:
      return candidateCountries[0];
    default:
      return candidateCountries.find(function (candidateCountry) {
        return candidateCountry.isXSiteUrnFallback;
      });
  }
}
