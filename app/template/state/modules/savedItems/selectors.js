import { createSelector } from "reselect";
import {DEFAULT_STATE} from "../constants";

const getSavedItems = state => {
  // state = DEFAULT_STATE;
  return state.savedItems;
};

export const getItems = createSelector(getSavedItems, saved => saved.items);

export const hasSavedItems = createSelector(
  getItems,
  items => items.length > 0
);
