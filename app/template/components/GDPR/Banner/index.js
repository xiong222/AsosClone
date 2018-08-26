import { connect } from "react-redux";
import Banner from "./Banner";

import { getFirstName } from "../../../state/modules/user";

function mapStateToProps(state) {
  return {
    firstName: getFirstName(state)
  };
}

export default connect(mapStateToProps)(Banner);
