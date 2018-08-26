import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Burger from './Burger';
import { openSidePanel, isSidePanelOpen } from '../../state/modules/layout';
import { getVisibility } from '../../state/modules/search';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openSidePanel }, dispatch);
}

function mapStateToProps(state) {
  return {
    isSidePanelOpen: isSidePanelOpen(state),
    isSearchVisible: getVisibility(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger);

