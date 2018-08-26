import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  trackNavOpen,
  ANALYTICS_INTERACTION_EXPAND,
  ANALYTICS_POSITION_FOOTER,
  ANALYTICS_CONTEXT
} from '../../../../helpers/events';
import { withParams } from '../../../../helpers/queryString';
import styles from './index.css';

const cx = classnames.bind(styles);

class LinkGroup extends Component {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
    isAccordion: PropTypes.bool.isRequired,
    groupItem: PropTypes.shape({
      label: PropTypes.string.isRequired
    }),
    keyStoreDataversion: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    storeCode: PropTypes.string.isRequired
  };

  state = {
    hideFocus: false
  };

  handleOpen = (e) => {
    const { isAccordion } = this.props;

    if (!isAccordion) {
      e.preventDefault();
    } else if (!this.details.open) {
      trackNavOpen({
        context: ANALYTICS_CONTEXT.footerExpandable,
        elementText: this.props.groupItem.label,
        interaction: ANALYTICS_INTERACTION_EXPAND,
        properties: {
          positionOnPage: ANALYTICS_POSITION_FOOTER
        }
      });
    }
  };

  handleMouseDown = () => {
    this.setState({ hideFocus: true });
  };

  handleBlur = () => {
    this.setState({ hideFocus: false });
  };

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  render() {
    const {
      countryCode: country,
      groupItem,
      isAccordion,
      keyStoreDataversion,
      lang,
      storeCode: store
    } = this.props;

    const withAdditionalParams = (link, alias) => {
      if (alias === 'track_my_order') {
        return withParams(link, {
          country,
          keyStoreDataversion,
          lang,
          store
        });
      }

      if (link.includes('marketplace')) {
        return withParams(link, {
          ctaref: 'Global footer'
        });
      }

      return link;
    };

    return (
      <details
        className={styles.container}
        open={!isAccordion}
        data-testid="footer-links"
        ref={(e) => (this.details = e)}
      >
        <summary
          className={cx(styles.header, {
            [styles.header__focused]: this.state.hideFocus
          })}
          onMouseDown={this.handleMouseDown}
          onClick={this.handleOpen}
          onKeyPress={this.handleOpen}
          onBlur={this.handleBlur}
          tabIndex={!isAccordion ? -1 : null}
          role="menu"
        >
          {groupItem.label}
        </summary>
        {groupItem.items.map(({
          alias, id, label, link, linkType
        }) => (
          <a
            key={id}
            className={styles.link}
            href={withAdditionalParams(link, alias)}
            role="menuitem"
            target={linkType === 'external' ? '_blank' : '_self'}
          >
            {label}
          </a>
        ))}
      </details>
    );
  }
  /* eslint-enable */
}

export default LinkGroup;
