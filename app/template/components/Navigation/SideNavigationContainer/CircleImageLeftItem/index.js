import React from "react";
import classnames from "classnames";

import NavAnchor from "../../NavAnchor";
import { navigationItemPropType } from "../../../../state/modules/navigation";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";

import styles from "./index.css";

const cx = classnames.bind(styles);

const CircleImageLeftItem = ({ item }) => {
  const { label, smallAndMediumImageUrl, smallAndMediumStyleType } = item;

  return (
    <li className={styles.menuItem}>
      <NavAnchor className={styles.button} item={item}>
        <div
          aria-hidden="true"
          className={styles.circleImage}
          role="presentation"
          style={{
            backgroundImage: `url(${getBackgroundImageUrl(
              smallAndMediumImageUrl,
              240
            )})`
          }}
          title={label}
        />
        <span
          className={cx(styles.label, {
            [styles.label__sale]: smallAndMediumStyleType === "sale",
            [styles.label__bold]: smallAndMediumStyleType === "premium"
          })}
        >
          {label.substring(0, 40)}
        </span>
      </NavAnchor>
    </li>
  );
};

CircleImageLeftItem.propTypes = {
  item: navigationItemPropType.isRequired
};

export default CircleImageLeftItem;
