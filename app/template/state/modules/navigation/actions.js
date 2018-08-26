import {
  SET_NAV_ACTIVE_ITEM,
  CLEAR_NAV_ACTIVE_ITEM,
  UPDATE_NAVIGATION_TREE
} from "./constants";

export const setNavActiveItem = id => ({
  type: SET_NAV_ACTIVE_ITEM,
  payload: id
});

export const clearNavActiveItem = () => ({
  type: CLEAR_NAV_ACTIVE_ITEM
});

export const updateNavigationTree = navigationTree => ({
  type: UPDATE_NAVIGATION_TREE,
  payload: navigationTree
});
