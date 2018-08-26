export default function getters(values) {
  return {
    /**
     * User selected (country dropdown) or system selected Country code
     * @returns {string} ßISO 3166-1 alpha-2 code
     */
    getBrowseCountry: () => values.browseCountry,

    /**
     * The currency the customer is using for their purchase
     * @returns {string} - ISO 4217 code
     */
    getBrowseCurrency: () => values.browseCurrency,

    /**
     * Language tag representing the language of the site the customer is currently viewing.
     * @returns {string} - RFC 5646 Language tag
     */
    getBrowseLanguage: () => values.browseLanguage,

    /**
     * The asos size schema identifier representing the sizing scheme the customer is currently shopping using.
     * @returns {string} - Size Schema name
     */
    getBrowseSizeSchema: () => values.browseSizeSchema,

    /**
     * Asos store identifier representing store associated with a country
     * @returns {string} store identifier
     */
    getStoreId: () => values.storeId,

    /**
     *  System default Country code for a specific site
     * @returns {string} - ISO 3166-1 alpha-2 code
     */
    getDefaultCountry: () => values.defaultCountry,

    /**
     * Returns flag indicating whether response is using store V1 (store mode) or Store V2 (Country mode)
     * @returns {boolean}
     */
    getEnableStoreBasedOperation: () => values.enableStoreBasedOperation,

    /**
     * The version of Store API data that should be used by all the dependent services & APIs
     * @returns {number}
     */
    getKeyStoreDataversion: () => values.keyStoreDataversion,
    /**
     * The version of the current template
     * @returns {number}
     */
    getTemplateVersion: () => values.templateVersion,

    /**
     * The current geo country from the akamai cookie
     * @returns {string}
     */
    getGeoCountry: () => values.geoCountry,

    /**
     * Returns affiliateId from cookies
     * @return {string}
     */
    getAffiliateId: () => values.affiliateId,

    /**
     * @type {webContext}
     * @property {string} affiliateId - Asos affiliate identifier
     * @property {string} storeId - Asos Store Id
     * @property {string} browseCountry - ISO code for chosen country
     * @property {string} defaultCountry - ISO code for template country
     * @property {string} geoCountry - ISO code for Geo Country
     * @property {string} browseCurrency - Users currency
     * @property {string} browseLanguage - users language
     * @property {string} browseSizeSchema - users size schema
     * @property {string} enableStoreBasedOperation - store or country mode
     * @property {number} keyStoreDataversion - version of Store API data
     * @property {number} templateVersion - version of Store API data
     */

    /**
     * Convenience collection of each individual properties
     * @returns {webContext}
     */
    getWebContext: () => values
  };
}
