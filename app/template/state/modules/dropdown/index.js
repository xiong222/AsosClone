import { OPEN_DROPDOWN, CLOSE_DROPDOWN, DROPDOWN_NAMES } from "./constants";
export { openDropdown, closeDropdown, dropdownClosed } from "./actions";
export {
  getDropdownIsOpen,
  getDropdownIsHidden,
  getDropdownProgrammatic
} from "./selectors";
export {
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN,
  DROPDOWN_NAMES,
  MY_ACCOUNT,
  MINIBAG,
  DROPDOWN_CLOSED
} from "./constants";

export const initDropdownStates = dropdownNames =>
  dropdownNames.reduce((dropdowns, name) => {
    dropdowns[name] = {
      isOpen: false
    };
    return dropdowns;
  }, {});

const initialState = initDropdownStates(DROPDOWN_NAMES);

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DROPDOWN: {
      let dropdownToggles = DROPDOWN_NAMES.reduce((dropdowns, name) => {
        dropdowns[name] =
          name === action.name
            ? { isOpen: true, programmatic: action.programmatic }
            : { isOpen: false, isHidden: true };
        return dropdowns;
      }, {});

      return {
        ...state,
        ...dropdownToggles
      };
    }
    case CLOSE_DROPDOWN:
      return {
        ...state,
        [action.name]: { isOpen: false }
      };
    default:
      return state;
  }
};
