import { connect } from 'react-redux';
import MyAccountLinks from './MyAccountLinks';
import { getIsReconsentRequired } from '../../state/modules/user';
import {
  getCountryCode,
  getDefaultLanguage,
  getDefaultStoreUrl,
  getKeyStoreDataversion,
  getStoreCode
} from '../../state/modules/regionalStore';

function mapStateToProps(state) {
  return {
    countryCode: getCountryCode(state),
    defaultStoreUrl: getDefaultStoreUrl(state),
    isReconsentRequired: getIsReconsentRequired(state),
    keyStoreDataversion: getKeyStoreDataversion(state),
    lang: getDefaultLanguage(state),
    storeCode: getStoreCode(state)
  };
}

export default connect(mapStateToProps)(MyAccountLinks);
