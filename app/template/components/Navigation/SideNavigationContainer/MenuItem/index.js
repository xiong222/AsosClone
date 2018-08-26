import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {
  trackNavOpen,
  getGender,
  ANALYTICS_INTERACTION_CLICK,
  ANALYTICS_POSITION_HEADER,
  ANALYTICS_CONTEXT
} from "../../../../../helpers/events";
import styles from "./index.css";

import { truncateTitle } from "../../../../../helpers/formatting";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";

const cx = classnames.bind(styles);

const MenuItem = ({
                    className,
                    item,
                    setNavActiveItem,
                    saveNavigationItem,
                    tabIndex
                  }) => {
  const clickItem = () => {
    setNavActiveItem(item.id);
    trackNavOpen({
      context: ANALYTICS_CONTEXT.openNav,
      interaction: ANALYTICS_INTERACTION_CLICK,
      elementText: item.label,
      properties: {
        positionOnPage: ANALYTICS_POSITION_HEADER,
        gender: getGender(item.gender)
      }
    });
  };

  return (
    <li className={cx(styles.container, className)}>
      <button
        key={item.id}
        data-navid={item.id}
        className={styles.menuItem}
        type="button"
        onClick={clickItem}
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
            [styles.label__sale]: item.smallAndMediumStyleType === "sale",
            [styles.label__light]: item.smallAndMediumStyleType === "light"
          })}
        >
          {item.smallAndMediumStyleType !== "noTitle" && (
            <span>{truncateTitle(item)}</span>
          )}
          {item.subtitle && (
            <span className={styles.subtitle}>
              {item.subtitle.substring(0, 24)}
            </span>
          )}
        </p>
      </button>
    </li>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.any,
  setNavActiveItem: PropTypes.func.isRequired,
  saveNavigationItem: PropTypes.func.isRequired,
  tabIndex: PropTypes.number
};

MenuItem.defaultProps = {
  tabIndex: 0
};

export default MenuItem;
