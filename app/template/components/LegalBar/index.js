import { connect } from 'react-redux';
import LegalBar from './LegalBar';

import { getDefaultStoreUrl } from '../../state/modules/regionalStore';

function mapStateToProps(state) {
  return {
    defaultStoreUrl: getDefaultStoreUrl(state)
  };
}

export default connect(mapStateToProps)(LegalBar);
