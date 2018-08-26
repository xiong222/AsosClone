import {
  getGeoCountry,
  getBrowseCountry
} from '../../modules/asos-site-chrome-store-presentation';

import { getParamValue } from '../../helpers/url';

const userHasAPreferredCountry = () => getBrowseCountry();
const templateMatchesGeolocation = (templateCountry) =>
  getGeoCountry() === templateCountry;

export default function templateMatchesCountry(contextObject) {
  if (getParamValue('browseCountry')) {
    return true;
  }

  if (userHasAPreferredCountry()) {
    return true;
  }

  if (!getGeoCountry()) {
    return true;
  }

  if (!contextObject || !contextObject.browseCountry) {
    return true;
  }

  if (templateMatchesGeolocation(contextObject.browseCountry)) {
    return true;
  }

  return false;
}


