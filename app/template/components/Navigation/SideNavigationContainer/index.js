import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SideNavigationContainer from "./SideNavigationContainer";
import { setNavActiveItem } from "../../../state/modules/navigation";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setNavActiveItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideNavigationContainer);
