import { connect } from "react-redux";
import Greeter from "./Greeter";
import {
  isLoggedIn,
  getFirstName,
  getIsRecognised
} from "../../state/modules/user";
import {
  getDefaultLanguage,
  getStoreCode,
  getCountryCode,
  getKeyStoreDataversion
} from "../../state/modules/regionalStore";

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    firstName: getFirstName(state),
    isRecognised: getIsRecognised(state),
    storeCode: getStoreCode(state),
    lang: getDefaultLanguage(state),
    countryCode: getCountryCode(state),
    keyStoreDataversion: getKeyStoreDataversion(state)
  };
}

export default connect(mapStateToProps)(Greeter);
