import { REHYDRATE } from "redux-persist";
import searchTermCleanser from "../../../helpers/searchTermCleanser";
import {
  REQUEST_SUGGESTIONS,
  RECEIVE_SUGGESTIONS,
  SUBMIT_SEARCH,
  CLEAR_RECENT_SEARCHES,
  SET_SEARCH_TERM,
  MAXIMUM_RECENT_SEARCHES,
  MINIMUM_SUGGESTIONS_CHARS,
  CLOSE_SEARCH,
  OPEN_SEARCH
} from "./constants";

export {
  loadSuggestions,
  submitSearch,
  clearRecentSearches,
  setSearchTerm,
  closeSearch,
  openSearch
} from "./actions";

export {
  getSearchSuggestions,
  getSearchHistory,
  getVisibility,
  getSearchTerm,
  getResultVisibility,
  isSearchResultsPanelOpen
} from "./selectors";

const initialState = {
  recent: [],
  suggestions: [],
  term: "",
  isVisible: false
};

const addToSearchArray = (arr, newItem) => {
  const item = searchTermCleanser(newItem);
  if (!item && !item.length) {
    return arr;
  }

  if (arr.length === MAXIMUM_RECENT_SEARCHES) {
    arr.pop();
  }

  arr.unshift(item);

  return arr;
};

export default (state = initialState, action) => {
  if (action.type === SUBMIT_SEARCH) {
    if (state.recent.indexOf(action.payload) === -1) {
      return {
        ...state,
        recent: addToSearchArray(state.recent, action.payload)
      };
    } else {
      return state;
    }
  }

  if (action.type === SET_SEARCH_TERM) {
    return {
      ...state,
      term: action.payload
    };
  }

  if (action.type === RECEIVE_SUGGESTIONS) {
    if (state.term === action.meta.term) {
      return {
        ...state,
        suggestions:
          action.meta.term.length < MINIMUM_SUGGESTIONS_CHARS ||
          action.payload.length > 0
            ? action.payload
            : state.suggestions,
        isLoading: false
      };
    }

    return {
      ...state,
      isLoading: false
    };
  }

  if (action.type === REHYDRATE && action.payload && action.payload.search) {
    return { ...state, recent: action.payload.search.recent };
  }

  if (action.type === CLOSE_SEARCH) {
    return {
      ...state,
      isVisible: false
    };
  }

  if (action.type === OPEN_SEARCH) {
    return {
      ...state,
      isVisible: true
    };
  }

  if (action.type === CLEAR_RECENT_SEARCHES) {
    return { ...state, recent: [] };
  }

  if (action.type === REQUEST_SUGGESTIONS) {
    return { ...state, isLoading: true };
  }

  return state;
};
