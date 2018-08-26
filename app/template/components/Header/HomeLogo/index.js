import { connect } from "react-redux";
import HomeLogo from "./HomeLogo";
import { getCurrentGender } from "../../../state/modules/layout";
import {DEFAULT_STATE} from "../../../state/modules/constants";

function mapStateToProps(state) {
  // state = DEFAULT_STATE;
  return {
    storeUrls: state.regionalStore.storeUrls,
    gender: getCurrentGender(state)
  };
}

export default connect(mapStateToProps)(HomeLogo);
