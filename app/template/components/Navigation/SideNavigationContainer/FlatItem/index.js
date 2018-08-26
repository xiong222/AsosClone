import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./index.css";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";

const cx = classnames.bind(styles);

const FlatItem = ({ className, item, saveNavigationItem, tabIndex }) => (
  <li className={cx(styles.container, className)}>
    <a
      href={item.link}
      data-navid={item.id}
      className={cx(styles.menuItem, styles.flatMenuItem)}
      ref={saveNavigationItem}
      tabIndex={tabIndex}
      data-testid="menu-item"
      style={
        item.smallAndMediumImageUrl && {
          backgroundImage: `url(${getBackgroundImageUrl(
            item.smallAndMediumImageUrl,
            320
          )})`
        }
      }
    >
      <p
        className={cx(styles.label, {
          [styles.label__light]: item.smallAndMediumStyleType === "light"
        })}
      >
        {item.label.substring(0, 24)}
      </p>
    </a>
  </li>
);

FlatItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.any,
  saveNavigationItem: PropTypes.func.isRequired,
  tabIndex: PropTypes.number
};

FlatItem.defaultProps = {
  tabIndex: 0
};

export default FlatItem;
