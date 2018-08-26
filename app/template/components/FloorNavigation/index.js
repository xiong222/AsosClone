import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setGender,
  isMale,
  isFemale,
  getViewport
} from '../../state/modules/layout';
import {
  getStoreUrlForWomen,
  getStoreUrlForMen
} from '../../state/modules/regionalStore';
import FloorNavigation from './FloorNavigation';

function mapStateToProps(state) {
  return {
    isMale: isMale(state),
    isFemale: isFemale(state),
    viewport: getViewport(state),
    menStoreUrl: getStoreUrlForMen(state),
    womenStoreUrl: getStoreUrlForWomen(state)
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setGender }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FloorNavigation);

