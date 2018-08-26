import { getPrimaryLanguage, getPrimaryCurrency, getPrimarySizeSchema } from "../getPrimaryAttribute";

var formatCountries = function formatCountries(countries, keyStoreDataversion) {
  return countries.map(function (country) {
    return format(country, keyStoreDataversion);
  });
};

/*
 * @typedef {Object} Country
 * @property {string} siteId
 * @property {string} storeCode
 * @property {Object} defaultLanguage
 * @property {Object} defaultSizeSchema
 * @property {Object} defaultCurrency
 * @property {string} url
 * @property {string} countryCode
 * @property {string} imageUrl
 * @property {string} name
 * @property {string} majorCountry
 * @property {string} isDefaultCountry
 * @property {Object[]} currencies
 * @property {Object[]} languages
 * @property {Object[]} sizeSchemas
 * @property {string} keyStoreDataversion
 * @property {Object.<string, Country>} [keyStoreDataversionVariants]
 */

/*
 * @returns {Country} country
 */
function format(country, keyStoreDataversion) {
  return {
    siteId: country.siteId,
    storeCode: country.store,
    defaultLanguage: getPrimaryLanguage(country),
    defaultSizeSchema: getPrimarySizeSchema(country),
    defaultCurrency: getPrimaryCurrency(country),
    url: country.siteUrl,
    countryCode: country.country,
    imageUrl: country.imageUrl,
    name: country.name,
    majorCountry: country.majorCountry,
    isDefaultCountry: false,
    currencies: country.currencies,
    languages: country.languages,
    sizeSchemas: country.sizeSchemas,
    keyStoreDataversion: keyStoreDataversion
  };
}

export default formatCountries;
