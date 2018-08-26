import storeToDefaultCountryMappings from './storeToDefaultCountryMappings.json';

// const storeToDefaultCountryMappings = require('json!./storeToDefaultCountryMappings.json');

export default function getStoreToDefaultCountryMappings() {
  storeToDefaultCountryMappings.forEach((storeToDefaultCountryMapping) => {
    const defaultCountryCode = storeToDefaultCountryMapping.defaultCountryCode;

    const allMappingsWithThisDefaultCountryCode = storeToDefaultCountryMappings.filter((mapping) => mapping.defaultCountryCode === defaultCountryCode);

    const suchMappingsWithXSiteUrnFallback = allMappingsWithThisDefaultCountryCode.filter((mapping) => mapping.isXSiteUrnFallback);

    if (suchMappingsWithXSiteUrnFallback.length > 1) {
      throw `The defaultCountryCode '${defaultCountryCode}' has been assigned an 'isXSiteUrnFallback' of true more than once. Each defaultCountryCode can only have up to one xSiteUrnFallback.`;
    }

    if (allMappingsWithThisDefaultCountryCode.length > 1 && suchMappingsWithXSiteUrnFallback.length === 0) {
      throw `The defaultCountryCode '${defaultCountryCode}' is mapped more than once, but none of these mappings has 'isXSiteUrnFallback' set as true. At least one of them must.`;
    }
  });

  return storeToDefaultCountryMappings;
}
