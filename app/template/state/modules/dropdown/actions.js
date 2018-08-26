import {
  OPEN_DROPDOWN,
  OPEN_COMPLETE,
  CLOSE_DROPDOWN,
  DROPDOWN_CLOSED
} from "./constants";

export const openDropdown = name => ({ type: OPEN_DROPDOWN, name });

export const openComplete = name => ({ type: OPEN_COMPLETE, name });

export const closeDropdown = name => ({ type: CLOSE_DROPDOWN, name });

export const dropdownClosed = name => ({ type: DROPDOWN_CLOSED, name });

