import { connect } from "react-redux";
import {
  getCountryCode,
  getDefaultLanguage,
  getKeyStoreDataversion,
  getStoreCode
} from "../../../state/modules/regionalStore";
import { isLoggedIn, getFirstName } from "../../../state/modules/user";
import ContactPreferences from "./ContactPreferences";
import { buildBasicPayload } from "../../../state/modules/analytics/actions";
import { getFeature } from "../../../state/modules/features";

const mapStateToProps = state => ({
  countryCode: getCountryCode(state),
  isLoggedIn: isLoggedIn(state),
  firstName: getFirstName(state),
  gdprDeadlineCopyFeature: getFeature(state, "stc-gdpr-deadline-copy"),
  keyStoreDataversion: getKeyStoreDataversion(state),
  lang: getDefaultLanguage(state),
  storeCode: getStoreCode(state)
});

const mapDispatchToProps = {
  buildBasicPayload
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPreferences);

