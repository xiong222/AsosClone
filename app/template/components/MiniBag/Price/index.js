import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import withTranslation from "../../translation";
import styles from "./index.css";

const cx = classnames.bind(styles);

const Price = ({
                 text,
                 current,
                 previous,
                 rrp,
                 isMarkedDown,
                 isOutletPrice,
                 formatTranslation
               }) => (
  <div className={styles.container}>
    <span
      className={cx([styles.current], {
        [styles.highlight]: isMarkedDown || isOutletPrice
      })}
    >
      {text || current.text}
    </span>
    {isOutletPrice && (
      <span className={styles.rrp}>
        <span className={styles.rrpLabel}>
          {formatTranslation("MiniBag.RRP")}
        </span>
        {rrp.text}
      </span>
    )}
    {isMarkedDown && <span className={styles.previous}>{previous.text}</span>}
  </div>
);

Price.propTypes = {
  current: PropTypes.shape({
    text: PropTypes.string
  }),
  isMarkedDown: PropTypes.bool,
  isOutletPrice: PropTypes.bool,
  previous: PropTypes.shape({
    text: PropTypes.string
  }),
  rrp: PropTypes.shape({
    text: PropTypes.string
  }),
  text: PropTypes.string,
  formatTranslation: PropTypes.func.isRequired
};

Price.defaultProps = {
  current: {}
};

export default withTranslation(Price);
