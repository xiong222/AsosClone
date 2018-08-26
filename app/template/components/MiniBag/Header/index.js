import { connect } from "react-redux";
import MinibagHeader from "./MinibagHeader";
import { getTotalQuantity } from "../../../state/modules/bag";

const mapStateToProps = state => ({
  totalQuantity: getTotalQuantity(state)
});

export default connect(mapStateToProps)(MinibagHeader);
