import getDefaultCountries from "../getDefaultCountries";

/*
 * @typedef {Object} CountryCollections
 * @property {Country[]} majorCountries
 * @property {Country[]} defaultCountries
 * @property {Country[]} countries
 */

/*
 * @retuns {CountryCollections} countryCollections
 */
export default function createCountryCollections(countries) {
  var isMajorCountry = function isMajorCountry(country) {
    return country.majorCountry === null;
  };
  var majorCountries = countries.filter(isMajorCountry);

  return {
    majorCountries: majorCountries,
    defaultCountries: getDefaultCountries(majorCountries),
    countries: countries
  };
}
