import { createSelector } from "reselect";
import { MINIMUM_SUGGESTIONS_CHARS } from "./constants";
import {DEFAULT_STATE} from "../constants";

const getSearch = state => {
  // state = DEFAULT_STATE;
  return state.search;
};

const hasHistoryOrSuggestions = (suggestions, history) =>
  suggestions.length > 0 || history.length > 0;

export const getSearchSuggestions = createSelector(
  getSearch,
  search => search.suggestions
);

export const getSearchTerm = createSelector(getSearch, search => search.term);

export const getSearchHistory = createSelector(
  getSearch,
  search => search.recent
);

export const getVisibility = createSelector(
  getSearch,
  search => search.isVisible || false
);

export const termLongEnoughToSearch = createSelector(
  getSearch,
  search => search.term.length >= MINIMUM_SUGGESTIONS_CHARS
);

// needs to add loading icon
export const getLoadingStatus = createSelector(
  getSearch,
  /* istanbul ignore next */ search => search.isLoading
);

export const getResultVisibility = createSelector(
  getVisibility,
  getSearchHistory,
  getSearchSuggestions,
  (isVisible, history, suggestions) =>
    isVisible && hasHistoryOrSuggestions(suggestions, history)
);

export const isSearchResultsPanelOpen = createSelector(
  getSearchSuggestions,
  getSearchHistory,
  (suggestions, history) => hasHistoryOrSuggestions(suggestions, history)
);

