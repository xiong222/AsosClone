import {
  REQUEST_SUGGESTIONS,
  RECEIVE_SUGGESTIONS,
  SUBMIT_SEARCH,
  CLEAR_RECENT_SEARCHES,
  SET_SEARCH_TERM,
  CLOSE_SEARCH,
  OPEN_SEARCH
} from "./constants";

import { termLongEnoughToSearch } from "./selectors";
import searchTermCleanser from "../../../helpers/searchTermCleanser";

export const requestSuggestions = term => ({
  type: REQUEST_SUGGESTIONS,
  payload: term
});

export const receiveSuggestions = (term, suggestions) => ({
  type: RECEIVE_SUGGESTIONS,
  payload: suggestions,
  meta: { term }
});

export const submitSearch = term => ({
  type: SUBMIT_SEARCH,
  payload: term
});

export const clearRecentSearches = () => ({ type: CLEAR_RECENT_SEARCHES });

export const closeSearch = () => ({
  type: CLOSE_SEARCH
});

export const openSearch = () => ({
  type: OPEN_SEARCH
});

export const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  payload: searchTermCleanser(term)
});

export const loadSuggestions = () => {
  return async (dispatch, getState, { api }) => {
    const state = getState();
    const { regionalStore, search } = state;

    if (!termLongEnoughToSearch(state)) {
      return dispatch(receiveSuggestions(search.term, []));
    }

    dispatch(requestSuggestions(search.term));

    try {
      const suggestions = await api.fetchSuggestions(
        regionalStore.siteId,
        regionalStore.defaultLanguage,
        search.term,
        regionalStore.countryCode
      );

      dispatch(receiveSuggestions(search.term, parse(suggestions)));
    } catch (err) {
      // implement logging
    }
  };
};

function parse(responseJson) {
  return (
    (responseJson &&
      responseJson.suggestionGroups &&
      responseJson.suggestionGroups[0] &&
      responseJson.suggestionGroups[0].suggestions) ||
    []
  );
}

