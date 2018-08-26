import React, { Component } from "react";
import PropTypes from "prop-types";
import withTranslation from "../translation";
import styles from "./Burger.css";

class Burger extends Component {
  static propTypes = {
    openSidePanel: PropTypes.func.isRequired,
    isSidePanelOpen: PropTypes.bool.isRequired,
    isSearchVisible: PropTypes.bool.isRequired,
    formatTranslation: PropTypes.func.isRequired
  };

  saveRef = component => (this.component = component);

  render() {
    const { openSidePanel, formatTranslation } = this.props;
    return (
      <button
        className={styles.burger}
        onClick={openSidePanel}
        ref={this.saveRef}
        aria-label={formatTranslation("Burger.OpenNavigationLabel")}
        tabIndex={this.props.isSidePanelOpen ? -1 : 0}
        data-testid="burger-menu-button"
      />
    );
  }
}

export default withTranslation(Burger);
