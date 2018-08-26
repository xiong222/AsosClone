import React from "react";
import PropTypes from "prop-types";
import withTranslation from "../translation";

const SearchIcon = ({ formatTranslation }) => (
  <svg viewBox="0 0 17 17">
    <title>{formatTranslation("Icon.Search")}</title>
    <path
      fill="currentColor"
      fillRule="nonzero"
      d="M7.65 15.3a7.65 7.65 0 1 1 5.997-2.9c-.01.012 3.183 3.297 3.183 3.297l-1.22 1.18s-3.144-3.283-3.154-3.275A7.618 7.618 0 0 1 7.65 15.3zm0-2a5.65 5.65 0 1 0 0-11.3 5.65 5.65 0 0 0 0 11.3z"
    />
  </svg>
);

SearchIcon.propTypes = {
  formatTranslation: PropTypes.func.isRequired
};

export default withTranslation(SearchIcon);
