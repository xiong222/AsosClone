import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { SMALL_VIEWPORT } from "../../state/modules/layout/constants";
import withTranslation from "../translation";
import SearchIcon from "../SearchIcon";
import IconButton from "../IconButton";
import SearchDropdown from "../SearchDropdown";
import SearchControls from "./SearchControls";
import globalEventHandler, { events } from "../../globalEventHandler";
import styles from "./SearchForm.css";

const cx = classNames.bind(styles);

const SEARCH_SUGGESTIONS_DEBOUNCE_INTERVAL = 300;
const MAX_CHARACTER_VALUE_FOR_SEARCH = "150";

class SearchForm extends Component {
  /* istanbul ignore next */
  componentWillReceiveProps(nextProps) {
    const { isVisible } = this.props;
    const blockScrollStyle = "chrome-hide-overflow";

    if (!isVisible && nextProps.isVisible) {
      typeof document !== "undefined" &&
      document.body.classList.add(blockScrollStyle);
      setTimeout(() => this.term.focus(), 0);
    } else if (isVisible && !nextProps.isVisible) {
      typeof document !== "undefined" &&
      document.body.classList.remove(blockScrollStyle);
    }
  }

  componentDidMount() {
    this.closeSearchOverlay = globalEventHandler.addListener(
      events.closeSearchOverlay,
      this.handleBlur
    );
  }

  componentWillUnmount() {
    this.closeSearchOverlay && this.closeSearchOverlay.remove();
  }

  changeTerm(term) {
    const { setSearchTerm, loadSuggestions } = this.props;

    setSearchTerm(term);

    clearTimeout(this.timer);
    this.timer = setTimeout(
      loadSuggestions,
      SEARCH_SUGGESTIONS_DEBOUNCE_INTERVAL
    );
  }

  handleChange = ({ target }) => {
    this.changeTerm(target.value);
  };

  handleClose = () => {
    this.props.closeSearch();
    this.props.setSearchTerm("");

    /* istanbul ignore next */
    if (this.term) this.term.value = "";
  };

  handleSubmit = event => {
    const { onSearch, term } = this.props;

    if (term.length === 0) {
      event.preventDefault();
    } else {
      /* istanbul ignore next */
      if (this.term) {
        this.term.value = term;
      }

      onSearch(term);
    }
  };

  handleFocus = /* istanbul ignore next */ () => {
    this.props.openSearch();
  };

  handleBlur = () => {
    const { closeSearch, viewport } = this.props;
    if (viewport !== SMALL_VIEWPORT) {
      closeSearch();
    }
  };

  handleKeyDown = /* istanbul ignore next */ e => {
    if (e.keyCode === 40) {
      //Down arrow
      this.listRef.firstElementChild.firstElementChild.focus();
    } else if (e.shiftKey && e.keyCode === 9) {
      //Shift + Tab
      this.handleBlur();
    }
  };

  handleCloseKeyDown = /* istanbul ignore next */ e => {
    if (e.keyCode === 9) {
      //Tab
      this.focusSelf();
    }
  };

  handleSearchInputBlur = /* istanbul ignore next */ (p, e, ignoreTerm) => {
    const { isSearchResultsPanelOpen, term } = this.props;
    if (!isSearchResultsPanelOpen && (ignoreTerm || !term)) {
      this.handleBlur();
    }
  };

  handleSearchButtonBlur = /* istanbul ignore next */ () => {
    this.handleSearchInputBlur(null, null, true);
  };

  focusSelf = /* istanbul ignore next */ () => {
    setTimeout(() => this.term.focus(), 0);
  };

  render() {
    const {
      isVisible,
      hasVisibleResults,
      term,
      formatTranslation
    } = this.props;

    const buttonClassName = cx(styles.button, {
      [styles.button__active]: term
    });

    const resultsClassName = cx(styles.results, {
      [styles.results__active]: hasVisibleResults
    });

    const containerClassName = cx(styles.container, {
      [styles.container__active]: isVisible
    });

    const backdropClassName = cx(styles.backdrop, {
      [styles.backdrop__active]: isVisible
    });

    const fieldClassName = cx({
      [styles.field]: true,
      [styles.field__active]: isVisible
    });

    const searchAction = this.props.searchUrl;

    return (
      <div
        className={styles.searchContainer}
        onTouchMove={event => event.preventDefault()}
      >
        <div
          className={backdropClassName}
          aria-hidden="true"
          onClick={this.handleBlur}
          data-testid="search-overlay-shadow"
        />
        <form
          action={searchAction}
          method="get"
          onSubmit={this.handleSubmit}
          className={containerClassName}
          data-testid="search-form"
        >
          <div className={styles.fieldContainer} data-testid="search-field">
            <label htmlFor="chrome-search">
              <span className={styles.label}>
                {formatTranslation("SearchBar.Label")}
              </span>
              <input
                id="chrome-search"
                name="q"
                role="combobox"
                className={fieldClassName}
                type="search"
                autoComplete="off"
                placeholder={formatTranslation("SearchBar.Placeholder")}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                onBlur={this.handleSearchInputBlur}
                data-testid="search-input"
                ref={/* istanbul ignore next */ c => (this.term = c)}
                aria-autocomplete="both"
                aria-controls="search-results"
                aria-expanded={hasVisibleResults}
                maxLength={MAX_CHARACTER_VALUE_FOR_SEARCH}
              />
            </label>
            <button
              className={buttonClassName}
              type="submit"
              onBlur={this.handleSearchButtonBlur}
              data-testid="search-button-inline"
              disabled={term.length === 0}
            >
              <SearchIcon />
            </button>
            <section className={resultsClassName}>
              <SearchDropdown
                focusSearchBox={this.focusSelf}
                listRef={/* istanbul ignore next */ el => (this.listRef = el)}
              />
            </section>
          </div>
          <SearchControls viewable={[SMALL_VIEWPORT]}>
            <IconButton
              height={50}
              icon="close"
              onClick={this.handleClose}
              onKeyDown={this.handleCloseKeyDown}
              aria-label="Close"
            />
          </SearchControls>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  closeSearch: PropTypes.func.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  hasVisibleResults: PropTypes.bool,
  isSearchResultsPanelOpen: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool,
  loadSuggestions: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  openSearch: PropTypes.func.isRequired,
  searchUrl: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
  viewport: PropTypes.string.isRequired
};

SearchForm.defaultProps = {
  isVisible: false,
  hasVisibleResults: false
};

export default withTranslation(SearchForm);
