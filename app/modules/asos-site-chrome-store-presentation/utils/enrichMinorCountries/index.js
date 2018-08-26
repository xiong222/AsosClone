import _defineProperty from "babel-runtime/helpers/defineProperty";
import _Object$assign from "babel-runtime/core-js/object/assign";
export default function enrichMinorCountries(countries) {
  var countryMap = countries.reduce(function (memo, next) {
    return _Object$assign(memo, _defineProperty({}, next.country, next));
  }, {});

  return countries.map(function (country) {
    if (country.majorCountry === null) {
      return country;
    }

    return looseAssign(countryMap[country.majorCountry], country);
  });
}

function looseAssign(_ref, minor) {
  var store = _ref.store,
    siteUrl = _ref.siteUrl,
    siteId = _ref.siteId,
    languages = _ref.languages,
    currencies = _ref.currencies,
    sizeSchemas = _ref.sizeSchemas;

  return _Object$assign(minor, {
    store: store,
    siteUrl: siteUrl,
    siteId: siteId,
    languages: languages,
    currencies: currencies,
    sizeSchemas: sizeSchemas
  });
}
