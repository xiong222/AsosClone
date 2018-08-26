import _Object$assign from "babel-runtime/core-js/object/assign";
import getStoreToDefaultCountryMappings from "../storeToDefaultCountryMappings";

export default function getDefaultCountries(majorCountries) {
  var storeToDefaultCountryMappings = getStoreToDefaultCountryMappings();
  var stores = getUniqueStoresFromMajorCountries(majorCountries, storeToDefaultCountryMappings);

  var defaultCountries = stores.reduce(function (defaultCountries, store) {
    var storeToDefaultCountryMapping = storeToDefaultCountryMappings.find(function (mapping) {
      return mapping.storeCode === store.storeCode;
    });

    var majorCountry = majorCountries.find(function (country) {
      return country.countryCode === storeToDefaultCountryMapping.defaultCountryCode;
    });

    defaultCountries.push(_Object$assign({}, majorCountry, { isDefaultCountry: true }, store, {
      isXSiteUrnFallback: storeToDefaultCountryMapping.isXSiteUrnFallback || false
    }));

    return defaultCountries;
  }, []);

  return defaultCountries;
}

var getUniqueStoresFromMajorCountries = function getUniqueStoresFromMajorCountries(majorCountries, storeToDefaultCountryMappings) {
  var mapped = storeToDefaultCountryMappings.map(function (_ref) {
    var storeCode = _ref.storeCode;

    var country = majorCountries.find(function (c) {
      return c.storeCode === storeCode;
    });

    if (!country) return null;

    return {
      storeCode: storeCode,
      storeId: country.siteId,
      url: country.url
    };
  });

  return mapped.filter(function (v) {
    return v;
  });
};
