import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../index.css";
import ResultItem from "../ResultItem";
import { closeSearchOverlay } from "../../../globalEventHandler";

class ResultList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        searchTerm: PropTypes.string.isRequired,
        numberOfResults: PropTypes.number
      })
    ),
    setSearchTerm: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired,
    focusSearchBox: PropTypes.func.isRequired,
    listRef: PropTypes.func.isRequired
  };

  items = [];

  handleKeyDown = /* istanbul ignore next */ e => {
    const currentIndex = this.items.indexOf(e.target);

    if (e.keyCode === 40) {
      const next = this.items[currentIndex + 1];

      if (!next) {
        return this.props.focusSearchBox();
      }

      next.focus();
    }

    if (e.keyCode === 38) {
      if (currentIndex === 0) {
        return this.props.focusSearchBox();
      }

      const next = this.items[currentIndex - 1] || this.items[0];
      next.focus();
    }

    if (e.keyCode === 9 && !e.shiftKey) {
      const next = this.items[currentIndex + 1];

      if (!next) {
        closeSearchOverlay();
      }
    }
  };

  render() {
    const { items, setSearchTerm, term, focusSearchBox } = this.props;

    return (
      items && (
        <ul
          className={styles.list}
          role="listbox"
          id="search-results"
          ref={this.props.listRef}
        >
          {items.map((item, i) => (
            <ResultItem
              buttonRef={el => (this.items[i] = el)}
              key={i}
              item={item}
              term={term}
              setSearchTerm={setSearchTerm}
              focusSearchBox={focusSearchBox}
              onKeyDown={this.handleKeyDown}
            />
          ))}
        </ul>
      )
    );
  }
}

export default ResultList;
