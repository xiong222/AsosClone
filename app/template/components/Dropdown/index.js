import { connect } from 'react-redux';
import DropdownContainer from './DropdownContainer';
import {
  openDropdown,
  closeDropdown,
  dropdownClosed,
  getDropdownIsOpen,
  getDropdownIsHidden
} from '../../state/modules/dropdown';
import {DEFAULT_STATE} from "../../state/modules/constants";

const mapStateToProps = (state, props) => {
  // state = DEFAULT_STATE;
  return {
    isOpen: getDropdownIsOpen(state, props),
    isHidden: getDropdownIsHidden(state, props)
  }
};

const mapDispatchToProps = (dispatch, { name }) => ({
  open: () => dispatch(openDropdown(name)),
  close: () => dispatch(closeDropdown(name)),
  closed: () => dispatch(dropdownClosed(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);
