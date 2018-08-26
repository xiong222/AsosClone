import { connect } from "react-redux";
import SearchDropdown from "./SearchDropdown";
import { bindActionCreators } from "redux";
import {
  getSearchHistory,
  getSearchSuggestions,
  clearRecentSearches
} from "../../state/modules/search";

function mapStateToProps(state) {
  return {
    recentSearches: getSearchHistory(state),
    suggestions: getSearchSuggestions(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearRecentSearches }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDropdown);
