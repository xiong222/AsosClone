export const getDropdownIsOpen = (state, props) =>
  state.dropdown[props.name] && state.dropdown[props.name].isOpen;

export const getDropdownIsHidden = (state, props) =>
  state.dropdown[props.name] && state.dropdown[props.name].isHidden;

export const getDropdownProgrammatic = (state, props) =>
  state.dropdown[props.name] && state.dropdown[props.name].programmatic;
