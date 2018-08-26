import { connect } from "react-redux";
import { getStoreCode } from "../../../../../state/modules/regionalStore";
import GermanVATIncluded from "./GermanVATIncluded";

const mapStateToProps = state => ({
  storeCode: getStoreCode(state)
});

export default connect(mapStateToProps)(GermanVATIncluded);
