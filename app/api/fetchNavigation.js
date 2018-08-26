import logger from "../helpers/logger";
import clientConfig from "../template/clientConfig";
import { storeUrlsForAllFloors, DEFAULT } from "../helpers/storeUrls";
import { getNavigationUrl } from "./apiUrls";
import { mapNavigationState } from "./navigation/mapNavigationState";
import { validateMappedNavigation } from "./navigation/navigationUtils";
import request from "./request";

const fetchNavigation = async (
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
  const url = getNavigationUrl({
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
  const navigation = await request(url, opts, clientConfig.isServer());

  const mappedNavigation = {
    countryCode: country,
    tree: mapNavigationState(
      navigation.navigation,
      null,
      null,
      platform,
      storeUrl
    ),
    footer: mapNavigationState(
      navigation.footer,
      null,
      null,
      platform,
      storeUrl
    )
  };

  if (!validateMappedNavigation(mappedNavigation)) {
    throw new Error("Nav API response not valid");
  }

  return mappedNavigation;
};

export default fetchNavigation;

