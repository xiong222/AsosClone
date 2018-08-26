import { connect } from "react-redux";
import {
  getCountryCode,
  getDefaultLanguage,
  getKeyStoreDataversion,
  getStoreCode
} from "../../../state/modules/regionalStore";
import { buildBasicPayload } from "../../../state/modules/analytics/actions";
import Confirmation from "./Confirmation";

const mapStateToProps = state => ({
  countryCode: getCountryCode(state),
  keyStoreDataversion: getKeyStoreDataversion(state),
  lang: getDefaultLanguage(state),
  storeCode: getStoreCode(state)
});

const mapDispatchToProps = {
  buildBasicPayload
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);

