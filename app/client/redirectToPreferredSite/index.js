import { compose } from 'redux';
import { getBrowseCountry } from '../../modules/asos-site-chrome-store-presentation';
import { getParamValue } from '../../helpers/url';

const withoutProtocol = (url) => url.replace(/^https?:\/\//, '');

const withoutTrailingSlash = (str) => str.replace(/\/$/, '');

const normaliseUrl = compose(withoutProtocol, withoutTrailingSlash);

const normaliseCountryCode = (str) => str.toLowerCase();

export default (manifest, state, keyStoreDataversion) => {
  return false; // zotiger
  const { preferredSiteRedirects } = manifest;
  if (!preferredSiteRedirects) {
    return false;
  }


  const { enabled, keyStoreDataversionVariants } = preferredSiteRedirects;
  if (!enabled || !keyStoreDataversionVariants) {
    return false;
  }

  const redirectsForKeyStoreDataversion =
    keyStoreDataversionVariants[keyStoreDataversion];

  if (!redirectsForKeyStoreDataversion) {
    return false;
  }

  const qsBrowseCountry = getParamValue('browseCountry');

  if (qsBrowseCountry) {
    return false;
  }

  const browseCountry = normaliseCountryCode(getBrowseCountry() || '');
  if (!browseCountry) {
    return false;
  }

  const match = redirectsForKeyStoreDataversion.find(({ countryCodes }) =>
    countryCodes.map(normaliseCountryCode).includes(browseCountry)
  );

  if (!match) {
    return false;
  }

  const { storeUrls } = state.regionalStore;
  const floorUrls = Object.values(storeUrls).map(normaliseUrl);
  const { hostname, pathname } = window.location;
  const currentUrl = normaliseUrl(`${hostname}${pathname}`);
  const isFloorUrl = floorUrls.find((url) => url === currentUrl);

  if (!isFloorUrl) {
    return false;
  }

  const { layout: { platform } } = state;
  const { mobileUrl, desktopUrl } = match;

  const redirectUrl = platform === 'mobile' ? mobileUrl : desktopUrl;

  if (currentUrl.includes(normaliseUrl(redirectUrl))) {
    return false;
  }

  window.location.replace(`//${redirectUrl}`);

  return true;
};
