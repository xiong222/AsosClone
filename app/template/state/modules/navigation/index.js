import PropTypes from "prop-types";
import {
  SET_NAV_ACTIVE_ITEM,
  CLEAR_NAV_ACTIVE_ITEM,
  UPDATE_NAVIGATION_TREE
} from "./constants";
import {DEFAULT_STATE} from "../constants";

const navigationShape = {
  id: PropTypes.string.isRequired,
  alias: PropTypes.string,
  label: PropTypes.string,
  linkType: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  excludes: PropTypes.array.isRequired,
  largeScreenPriority: PropTypes.number,
  smallAndMediumImageUrl: PropTypes.string
};

export const navigationItemPropType = PropTypes.shape(navigationShape);

export const navigationPropType = PropTypes.shape({
  ...navigationShape,
  items: PropTypes.arrayOf(navigationItemPropType).isRequired
});

export {
  setNavActiveItem,
  clearNavActiveItem,
  updateNavigationTree
} from "./actions";
export { UL_ITEM_COUNT } from "./constants";
export {
  maleLargePrimaryNavigationItems,
  femaleLargePrimaryNavigationItems,
  maleSidePrimaryNavigationItems,
  femaleSidePrimaryNavigationItems,
  footerNavigation,
  getNavActiveItem
} from "./selectors";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NAV_ACTIVE_ITEM:
      return {
        ...state,
        activeNavItem: payload
      };

    case CLEAR_NAV_ACTIVE_ITEM:
      return {
        ...state,
        activeNavItem: null
      };

    case UPDATE_NAVIGATION_TREE:
      return {
        ...state,
        tree: payload.tree,
        footer: payload.footer || state.footer
      };
  }

  return state;
};
