import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { navigationItemPropType } from "../../../../state/modules/navigation";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";

import NavAnchor from "../../NavAnchor";

import styles from "./index.css";

const cx = classnames.bind(styles);

const CircleImageRightItem = ({ item }) => (
  <li className={styles.container}>
    <NavAnchor data-navid={item.id} className={styles.menuItem} item={item}>
      <span
        className={cx(styles.label, {
          [styles.label__sale]: item.smallAndMediumStyleType === "sale"
        })}
      >
        {item.label.substring(0, 36)}
      </span>
      <div
        aria-hidden="true"
        className={styles.image}
        role="presentation"
        style={{
          backgroundImage: `url(${getBackgroundImageUrl(
            item.smallAndMediumImageUrl,
            240
          )})`
        }}
      />
    </NavAnchor>
  </li>
);

CircleImageRightItem.propTypes = {
  item: navigationItemPropType.isRequired,
  setNavActiveItem: PropTypes.func.isRequired
};

export default CircleImageRightItem;
