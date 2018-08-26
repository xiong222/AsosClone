import React from "react";
import PropTypes from "prop-types";
import styles from "./CarouselLink.css";
import classnames from "classnames";
import { truncateTitle } from "../../../../../../helpers/formatting";
import { getBackgroundImageUrl } from "../../../../../helpers/navigationBackgroundImageResolver";
import { addAnalyticsDataToLink } from "../../../../../helpers/addAnalyticsDataToLink";

const cx = classnames.bind(this);

const CarouselLink = ({ item, className, tabIndex = 0 }) => {
  return (
    <li className={cx(styles.container, className)}>
      <a
        href={addAnalyticsDataToLink(item)}
        className={styles.carouselLink}
        tabIndex={tabIndex}
        style={{
          backgroundImage: `url(${getBackgroundImageUrl(
            item.smallAndMediumImageUrl,
            320
          )})`
        }}
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
      </a>
    </li>
  );
};

CarouselLink.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
  tabIndex: PropTypes.number
};

export default CarouselLink;
