import { connect } from "react-redux";
import SubTotal from "./SubTotal";
import { getTotalPriceText } from "../../../../state/modules/bag";

const mapStateToProps = state => {
  return {
    text: getTotalPriceText(state)
  };
};

export default connect(mapStateToProps)(SubTotal);
