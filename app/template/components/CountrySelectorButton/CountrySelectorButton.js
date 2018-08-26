import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.css';
import withTranslation from '../translation';
import {
  trackOpenCountryModal,
  ANALYTICS_INTERACTION_CLICK,
  ANALYTICS_CONTEXT
} from '../../../helpers/events';

const cx = classnames.bind(styles);

class CountrySelectorButton extends Component {
  trackOpenCountrySelector = () => {
    const { position } = this.props;
    trackOpenCountryModal({
      context: ANALYTICS_CONTEXT.openCountryModal,
      interaction: ANALYTICS_INTERACTION_CLICK,
      properties: {
        positionOnPage: position
      }
    });
  };

  handleClick = () => {
    const { openCountrySelector, closeSidePanel } = this.props;
    closeSidePanel();
    openCountrySelector();
    this.trackOpenCountrySelector();
  };

  render() {
    const {
      formatTranslation,
      countryFlag,
      countryName,
      withLabels
    } = this.props;

    const containerClass = withLabels
      ? cx(styles.container, styles.withLabels)
      : styles.container;

    return (
      <div className={containerClass} data-testid="country-selector">
        {withLabels && (
          <span className={styles.header}>
            {formatTranslation('CountrySelectorButton.Heading')}
          </span>
        )}
        <button
          className={styles.button}
          data-testid="country-selector-btn"
          type="button"
          aria-label={`${formatTranslation(
            'CountrySelectorButton.Heading'
          )} ${countryName}. ${formatTranslation(
            'CountrySelectorButton.ChangeCountry'
          )}`}
          onClick={this.handleClick}
        >
          {withLabels && (
            <span className={styles.locationText}>
              {formatTranslation('CountrySelectorButton.LocationText')}
            </span>
          )}
          <img
            src={countryFlag}
            alt={countryName}
            className={styles.countryFlag}
          />
          {withLabels && (
            <span className={styles.changeLabel}>
              {formatTranslation('CountrySelectorButton.ChangeButton')}
            </span>
          )}
        </button>
      </div>
    );
  }
}

CountrySelectorButton.defaultProps = {
  withLabels: false
};

CountrySelectorButton.propTypes = {
  formatTranslation: PropTypes.func.isRequired,
  countryFlag: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  openCountrySelector: PropTypes.func.isRequired,
  withLabels: PropTypes.bool,
  position: PropTypes.string.isRequired,
  closeSidePanel: PropTypes.func.isRequired
};

export default withTranslation(CountrySelectorButton);
