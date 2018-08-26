import React from 'react';
import PropTypes from 'prop-types';
import withTranslation from '../../translation';
import {
  trackSocialClick,
  ANALYTICS_INTERACTION_CLICK,
  ANALYTICS_POSITION_FOOTER,
  ANALYTICS_CONTEXT
} from '../../../../helpers/events';
import styles from './index.css';
import cx from 'classnames';

const SocialLinks = ({ links }) =>
  (links ? (
    <div className={styles.socialLinks} data-testid="social-links-bar">
      {Object.keys(links).map((link, index) => (
        <a
          title={link}
          className={cx(styles.socialLink, styles[link])}
          href={links[link]}
          target="_blank"
          onClick={() => trackClick(link)}
          key={index}
          data-testid="social-link"
        >
          {link}
        </a>
      ))}
    </div>
  ) : null);

function trackClick(name) {
  trackSocialClick({
    context: ANALYTICS_CONTEXT.social,
    interaction: ANALYTICS_INTERACTION_CLICK,
    elementText: name.toLowerCase(),
    properties: {
      positionOnPage: ANALYTICS_POSITION_FOOTER
    }
  });
}

SocialLinks.propTypes = {
  links: PropTypes.object,
  formatTranslation: PropTypes.func.isRequired
};

export default withTranslation(SocialLinks);
