import { GET_SAVED_ITEMS } from "./constants";
// import logger from "../../../../helpers/logger";

const sdkRequest = /* istanbul ignore next */ async dispatch => {
  // try {
  //   const { savedItemProducts } = await window.__sdk.savedItems.getSavedItems();
  //
  //   dispatch({ type: GET_SAVED_ITEMS, payload: savedItemProducts });
  // } catch (err) {
  //   logger.error(`Error while fetching saved items: ${err}`);
  //
  //   dispatch({ type: GET_SAVED_ITEMS, error: true, payload: err });
  // }
  dispatch({ type: GET_SAVED_ITEMS, payload: [] });
};

export const getSavedItemsFromSDK = /* istanbul ignore next */ () => /* istanbul ignore next */ dispatch => {
  return new Promise(function(resolve) {
    if (
      window.analyticsEventEmitter &&
      (!window.__sdk || !window.__sdk.savedItems)
    ) {
      window.analyticsEventEmitter.addListener("sdk-ready", () =>
        resolve(sdkRequest(dispatch))
      );
    } else {
      resolve(sdkRequest(dispatch));
    }
  });
};
