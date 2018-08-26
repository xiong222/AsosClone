import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LargePrimaryNavigation from './LargePrimaryNavigation';
import {
  maleLargePrimaryNavigationItems,
  femaleLargePrimaryNavigationItems,
  setNavActiveItem,
  getNavActiveItem
} from '../../../state/modules/navigation';
import { MALE, FEMALE } from '../../../state/modules/layout';
import {DEFAULT_STATE} from "../../../state/modules/constants";

const itemsSelector = (forGender, state) => {
  switch (forGender) {
    case MALE:
      return maleLargePrimaryNavigationItems(state);
    case FEMALE:
      return femaleLargePrimaryNavigationItems(state);
    default:
      return [];
  }
};

const mapStateToProps = (state, { forGender }) => {
  // state = DEFAULT_STATE;
  return {
    currentGender: state.layout.gender,
      items: itemsSelector(forGender, state),
    largeNavActiveItemId: getNavActiveItem(state)
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setNavActiveItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  LargePrimaryNavigation
);
