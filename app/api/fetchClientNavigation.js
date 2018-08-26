import logger from "../helpers/logger";
import { storeUrlsForAllFloors, DEFAULT } from "../helpers/storeUrls";
import { getNavigationSubtreeUrl } from "./apiUrls";
import { mapNavigationState } from "./navigation/mapNavigationState";
import { validateMappedNavigation } from "./navigation/navigationUtils";
import request from "./request";

const fetchClientNavigation = async (
  {
    country,
    lang,
    dateTime,
    includeDraft,
    showTestContent,
    platform,
    storeCode,
    storeUrl,
    keyStoreDataversion,
    opts = {}
  } = {}
) => {
  const url = getNavigationSubtreeUrl({
    country,
    lang,
    keyStoreDataversion,
    dateTime,
    includeDraft,
    showTestContent
  });

  if (!storeUrl && platform && storeCode) {
    storeUrl = storeUrlsForAllFloors(storeCode, platform)[DEFAULT];
  }

  logger.info("Fetching navigation API from", url);
  const navigation = await request(url, opts, false);

  const mappedNavigation = {
    countryCode: country,
    tree: mapNavigationState(navigation, null, null, platform, storeUrl)
  };

  if (!validateMappedNavigation(mappedNavigation)) {
    throw new Error("Nav API response not valid");
  }

  return mappedNavigation;
};

export default fetchClientNavigation;

