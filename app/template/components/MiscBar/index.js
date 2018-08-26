import { connect } from 'react-redux';
import MiscBar from './MiscBar';

import { getDefaultStoreUrl } from '../../state/modules/regionalStore';

function mapStateToProps(state) {
  return {
    defaultStoreUrl: getDefaultStoreUrl(state)
  };
}

export default connect(mapStateToProps)(MiscBar);
