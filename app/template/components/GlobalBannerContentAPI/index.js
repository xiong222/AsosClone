import { connect } from 'react-redux';
import GlobalBanner from '../../../modules/asos-content-api-global-banner';
import {
  getStoreCode,
  getDefaultLanguage,
  getCountryCode
} from '../../state/modules/regionalStore';

import { getIsPremier } from '../../state/modules/user';

function mapStateToProps(state) {
  return {
    store: getStoreCode(state),
    language: getDefaultLanguage(state),
    isPremier: getIsPremier(state),
    browseCountry: getCountryCode(state)
  };
}

export default connect(mapStateToProps)(GlobalBanner);
