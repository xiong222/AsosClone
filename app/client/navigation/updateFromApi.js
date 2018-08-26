import { fetchClientNavigation } from "../../api";
import { updateNavigationTree } from "../../template/state/modules/navigation";
import { addToLocalStorage } from "./navigationLocalStorage";

const updateFromApi = async ({
                               countryCode,
                               language,
                               store,
                               storeUrl,
                               platform,
                               fromLocalStorage
                             }) => {
  let hasUpdateHappened = false;
  try {
    const data = await fetchClientNavigation({
      country: countryCode,
      lang: language,
      storeUrl,
      platform
    });

    try {
      addToLocalStorage({ data, countryCode, language });
      hasUpdateHappened = true;
    } catch (e) {
      console.warn(`Saving navigation to localStorage failed: `, e);
    }

    store.dispatch(updateNavigationTree(data));
  } catch (e) {
    console.error(`Nav update failed`, e);
    if (fromLocalStorage) {
      store.dispatch(updateNavigationTree(fromLocalStorage));
      if (hasUpdateHappened) {
        addToLocalStorage({ data: fromLocalStorage, countryCode, language });
      }
    }
  }
};

export default updateFromApi;

