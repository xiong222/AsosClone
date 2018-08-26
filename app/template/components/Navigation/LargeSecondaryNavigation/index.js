import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LargeSecondaryNavigation from './LargeSecondaryNavigation';
import {
  getNavActiveItem,
  setNavActiveItem,
  clearNavActiveItem
} from '../../../state/modules/navigation';
import { getViewport } from '../../../state/modules/layout';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setNavActiveItem, clearNavActiveItem }, dispatch);

const mapStateToProps = (state) => {
  // state = DEFAULT_STATE;
  return {
    largeNavActiveItemId: getNavActiveItem(state),
      viewport: getViewport(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  LargeSecondaryNavigation
);
