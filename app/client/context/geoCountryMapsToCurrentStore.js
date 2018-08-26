import { getCurrentStore, mapsToTheComStore } from '../../helpers/manifest';

export default function geoCountryMapsToCurrentStore(geoCountry, manifest) {
  const store = getCurrentStore(manifest);

  if (!store) {
    // current store is COM
    return mapsToTheComStore(geoCountry, manifest);
  }

  return store.countryCodes.includes(geoCountry.toLowerCase());
}
