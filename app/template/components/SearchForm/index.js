import SearchForm from './SearchForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  submitSearch,
  loadSuggestions,
  getVisibility,
  closeSearch,
  getResultVisibility,
  setSearchTerm,
  getSearchTerm,
  isSearchResultsPanelOpen,
  openSearch
} from '../../state/modules/search';
import { getViewport } from '../../state/modules/layout';
import {
  getDefaultStoreUrl,
  getSearchUrl
} from '../../state/modules/regionalStore';

function mapStateToProps(state) {
  return {
    isVisible: getVisibility(state),
    hasVisibleResults: getResultVisibility(state),
    viewport: getViewport(state),
    term: getSearchTerm(state),
    isSearchResultsPanelOpen: isSearchResultsPanelOpen(state),
    searchUrl: 'search'/*getSearchUrl(state)*/,
    storeUrl: 'store'/*getDefaultStoreUrl(state)*/
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSearch: submitSearch,
      loadSuggestions,
      setSearchTerm,
      closeSearch,
      openSearch
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
