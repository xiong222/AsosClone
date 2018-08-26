import { getPageInfo } from "../../../helpers/pageInfoProvider";

import { getPlatform } from "../layout";
import {
  getCountryCode,
  getCurrency,
  getDefaultLanguage,
  getSiteId,
  getStoreCode
} from "../regionalStore";
import { getCustomerId, getIsRecognised, getIsPremier } from "../user";

export const buildBasicPayload = () => (dispatch, getState) => {
  const state = getState();
  const { section } = getPageInfo();
  return {
    countryCode: getCountryCode(state),
    currency: getCurrency(state),
    customerID: getCustomerId(state),
    language: getDefaultLanguage(state),
    pageName: "",
    pageTitle: "",
    pageType: section,
    platform: getPlatform(state),
    premierUser: getIsPremier(state),
    recognizedUser: getIsRecognised(state),
    storeCode: getStoreCode(state),
    storeID: getSiteId(state),
    trackingFrequency: "always"
  };
};



// WEBPACK FOOTER //
// ./template/state/modules/analytics/actions.js
