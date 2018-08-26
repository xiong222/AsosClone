import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CookieDisclaimer from "./CookieDisclaimer";
import {
  closeCookieMessage,
  isCookieMessageOpen,
  isSidePanelOpen
} from "../../../state/modules/layout";

import { getDefaultStoreUrl } from "../../../state/modules/regionalStore";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeCookieMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    cookieMessageOpen: isCookieMessageOpen(state),
    isSidePanelOpen: isSidePanelOpen(state),
    defaultStoreUrl: getDefaultStoreUrl(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieDisclaimer);
