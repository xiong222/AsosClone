import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidePanel from './SidePanel';
import {
  closeSidePanel,
  isSidePanelOpen,
  getCurrentGender
} from '../../../state/modules/layout';
import {
  clearNavActiveItem,
  getNavActiveItem,
  setNavActiveItem,
  maleSidePrimaryNavigationItems,
  femaleSidePrimaryNavigationItems
} from '../../../state/modules/navigation';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { closeSidePanel, clearNavActiveItem, setNavActiveItem },
    dispatch
  );

const mapStateToProps = (state) => ({
  isSidePanelOpen: isSidePanelOpen(state),
  navActiveItem: getNavActiveItem(state),
  currentGender: getCurrentGender(state),
  maleItems: maleSidePrimaryNavigationItems(state),
  femaleItems: femaleSidePrimaryNavigationItems(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
