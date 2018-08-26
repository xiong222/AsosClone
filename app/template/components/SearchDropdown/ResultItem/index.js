import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

class ResultItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      searchTerm: PropTypes.string.isRequired,
      numberOfResults: PropTypes.number
    }),
    setSearchTerm: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    buttonRef: PropTypes.func.isRequired
  };

  static bold = (match, word) => {
    const boldIndex = word.toLowerCase().indexOf(match.toLowerCase());

    return (
      word.substring(0, boldIndex) +
      `<span class="${styles.bold}">${word.substr(
        boldIndex,
        match.length
      )}</span>` +
      word.substring(boldIndex + match.length)
    );
  };

  static boldTermInText = (suggestion, term) => {
    const searchWords = term.split(/ /g);
    const suggestionWords = suggestion.split(/ /g);

    return suggestionWords
      .map(suggestionWord => {
        const firstMatch = searchWords.find(searchTerm =>
          suggestionWord.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return firstMatch
          ? ResultItem.bold(firstMatch, suggestionWord)
          : suggestionWord;
      })
      .join(" ");
  };

  static formatText = phrase => {
    return phrase
      .replace(/asos/i, "ASOS")
      .split(/ /g)
      .map(word => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
      .join(" ");
  };

  handleSubmit = () => {
    const { setSearchTerm, item: { searchTerm } } = this.props;

    setSearchTerm(searchTerm);
  };

  renderResultLabel(label) {
    const { term } = this.props;

    const text = ResultItem.formatText(label);
    const bolded = ResultItem.boldTermInText(text, term);

    return bolded;
  }

  renderResultCount(resultCount) {
    return (
      <span className={styles.count}>
        {resultCount.toLocaleString().replace(/\.00$/, "")}
      </span>
    );
  }

  render() {
    const { onKeyDown, item: { numberOfResults, searchTerm } } = this.props;

    return (
      <li>
        <button
          role="option"
          ref={this.props.buttonRef}
          onKeyDown={onKeyDown}
          className={styles.button}
          onClick={this.handleSubmit}
        >
          <span
            className={styles.label}
            dangerouslySetInnerHTML={{
              __html: this.renderResultLabel(searchTerm)
            }}
          />
          {numberOfResults && this.renderResultCount(numberOfResults)}
        </button>
      </li>
    );
  }
}

export default ResultItem;
