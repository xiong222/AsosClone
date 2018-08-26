import updateFromApi from "./updateFromApi";
import { updateNavigationTree } from "../../template/state/modules/navigation";
import { getFromLocalStorage } from "./navigationLocalStorage";

const getCountryData = store => {
  const {
    regionalStore: { countryCode, defaultLanguage, storeUrls },
    layout: { platform }
  } = store.getState();

  return [defaultLanguage, countryCode, storeUrls.default, platform];
};

export const reloadNavigation = async store => {
  const [language, countryCode, storeUrl, platform] = getCountryData(store);

  const { data, time } = getFromLocalStorage({ countryCode, language });

  if (data && time > Date.now()) {
    store.dispatch(updateNavigationTree(data));
  } else {
    updateFromApi({
      countryCode,
      language,
      store,
      storeUrl,
      platform,
      fromLocalStorage: data
    });
  }
};
