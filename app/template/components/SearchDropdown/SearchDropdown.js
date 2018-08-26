import React, { Component } from "react";
import { PropTypes } from "prop-types";
import withTranslation from "../translation";
import ResultList from "./ResultList";
import styles from "./index.css";

class SearchDropdown extends Component {
  static propTypes = {
    recentSearches: PropTypes.arrayOf(PropTypes.string),
    suggestions: PropTypes.arrayOf(PropTypes.object),
    formatTranslation: PropTypes.func.isRequired,
    clearRecentSearches: PropTypes.func.isRequired,
    focusSearchBox: PropTypes.func.isRequired,
    listRef: PropTypes.func.isRequired
  };

  render() {
    const { recentSearches, suggestions } = this.props;
    if (!recentSearches.length && !suggestions.length) return null;

    return (
      <div className={styles.container}>
        {suggestions.length ? this.renderSuggestions() : this.renderSearches()}
      </div>
    );
  }

  renderSuggestions() {
    return (
      <ResultList
        items={this.props.suggestions}
        focusSearchBox={this.props.focusSearchBox}
        listRef={this.props.listRef}
      />
    );
  }

  renderSearches() {
    const {
      recentSearches,
      formatTranslation,
      clearRecentSearches,
      focusSearchBox
    } = this.props;

    // normalise searches to be the same format as suggestions
    const searches = recentSearches.map(searchTerm => ({ searchTerm }));

    return (
      <div>
        <h3 className={styles.recentSearchesHeader}>
          {formatTranslation("SearchBar.RecentSearches")}
        </h3>
        <button
          className={styles.recentSearchesClear}
          aria-label={formatTranslation("SearchBar.ClearRecentSearchesLabel")}
          onClick={() => {
            clearRecentSearches();
            focusSearchBox();
          }}
          data-testid="clear-recent-searches"
        >
          {formatTranslation("SearchBar.ClearRecentSearchesText")}
        </button>
        <ResultList
          items={searches}
          focusSearchBox={focusSearchBox}
          listRef={this.props.listRef}
        />
      </div>
    );
  }
}

export default withTranslation(SearchDropdown);
