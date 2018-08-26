import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import LegalBar from '../LegalBar';
import Links from './Links';
import styles from './Footer.css';
import MyAccountLinks from '../MyAccountLinks';
import SocialLinks from './SocialLinks';
import PaymentOptions from './PaymentOptions';
import Greeter from '../Greeter';
import { SMALL_VIEWPORT } from '../../state/modules/layout';

const cx = classnames.bind(styles);

const Footer = ({ isAccordion, items }) => (
  <footer
    className={cx(styles.container, {
      [styles.container__accordion]: isAccordion
    })}
    data-testid="footer"
  >
    <div className={styles.mainContent}>
      <div className={styles.iconBar}>
        <SocialLinks />
        <PaymentOptions />
      </div>
      <div className={styles.greeterWrapper}>
        <Greeter viewable={[SMALL_VIEWPORT]} />
      </div>
      <div className={styles.myAccountLinksWrapper}>
        <MyAccountLinks
          viewable={[SMALL_VIEWPORT]}
          queryParams={{ nlid: 'nav footer' }}
        />
      </div>
      <Links items={items} isAccordion={isAccordion} />
    </div>
    <LegalBar />
  </footer>
);

Footer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  isAccordion: PropTypes.bool
};

export default Footer;
