import { getCurrentUrl } from "./url";

const getPreferredSiteRedirects = manifest => {
  const { keyStoreDataversion, preferredSiteRedirects } = manifest;
  const currentVersion = keyStoreDataversion.current;

  return preferredSiteRedirects.keyStoreDataversionVariants[currentVersion];
};

const getNonComCountryCodes = manifest =>
  getPreferredSiteRedirects(manifest)
    .map(item => item.countryCodes)
    .reduce((a, v) => a.concat(v), []);

export const mapsToTheComStore = (geoCountry, manifest) =>
  !getNonComCountryCodes(manifest).includes(geoCountry.toLowerCase());

export const getCurrentStore = manifest => {
  const url = getCurrentUrl();

  return getPreferredSiteRedirects(manifest).find(
    store => url.startsWith(store.desktopUrl) || url.startsWith(store.mobileUrl)
  );
};
