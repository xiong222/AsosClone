import { connect } from "react-redux";
import LinkGroup from "./LinkGroup";

import {
  getDefaultLanguage,
  getCountryCode,
  getStoreCode,
  getKeyStoreDataversion
} from "../../../state/modules/regionalStore";

function mapStateToProps(state) {
  return {
    storeCode: getStoreCode(state),
    lang: getDefaultLanguage(state),
    countryCode: getCountryCode(state),
    keyStoreDataversion: getKeyStoreDataversion(state)
  };
}

export default connect(mapStateToProps)(LinkGroup);
