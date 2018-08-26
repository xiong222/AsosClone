import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Widgets from "./Widgets";
import { openSearch } from "../../state/modules/search";
import { getTotalQuantity, getUpdated } from "../../state/modules/bag";
import { isLoggedIn, getIsReconsentRequired } from "../../state/modules/user";
import {
  hasSavedItems,
  getSavedItemsFromSDK
} from "../../state/modules/savedItems";
import { getViewport } from "../../state/modules/layout";

import {
  getDefaultLanguage,
  getCountryCode,
  getStoreCode,
  getKeyStoreDataversion,
  getDefaultStoreUrl
} from "../../state/modules/regionalStore";

import { isFeatureActive } from "../../state/modules/features";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openSearch,
      getSavedItemsFromSDK
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    hasSavedItems: hasSavedItems(state),
    noOfBagItems: getTotalQuantity(state),
    storeCode: getStoreCode(state),
    lang: getDefaultLanguage(state),
    countryCode: getCountryCode(state),
    keyStoreDataversion: getKeyStoreDataversion(state),
    defaultStoreUrl: getDefaultStoreUrl(state),
    isUpdated: getUpdated(state),
    isReconsentRequired: getIsReconsentRequired(state),
    viewport: getViewport(state),
    miniBagToggle: isFeatureActive(state, "stc-minibag-dropdown"),
    prideToggle: isFeatureActive(state, "stc-pride-heart")
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
