import { connect } from "react-redux";
import NotQuiteStickyHeader from "./NotQuiteStickyHeader";
import {
  getViewport,
  isSidePanelOpen,
  isCookieMessageOpen
} from "../../state/modules/layout";

function mapStateToProps(state) {
  return {
    viewportCategory: getViewport(state),
    isSidePanelOpen: isSidePanelOpen(state),
    cookieMessageOpen: isCookieMessageOpen(state)
  };
}

export default connect(mapStateToProps)(NotQuiteStickyHeader);
