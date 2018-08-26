import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LayoutManager from "./LayoutManager";
import {
  updateViewportCategory,
  getViewport,
  closeSidePanel
} from "../../state/modules/layout";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateViewportCategory,
      closeSidePanel
    },
    dispatch
  );

const mapStateToProps = state => ({
  viewportCategory: getViewport(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutManager);
