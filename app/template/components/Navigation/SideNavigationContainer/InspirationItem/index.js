import React from "react";
import classnames from "classnames";

import { navigationItemPropType } from "../../../../state/modules/navigation";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";
import NavAnchor from "../../NavAnchor";

import styles from "./index.css";

const cx = classnames.bind(styles);

const InspirationItem = ({ item }) => (
  <NavAnchor className={styles.card} item={item}>
    <div className={styles.wrapper}>
      <div
        aria-hidden="true"
        className={styles.image}
        role="presentation"
        style={
          item.smallAndMediumImageUrl && {
            backgroundImage: `url(${getBackgroundImageUrl(
              item.smallAndMediumImageUrl,
              320
            )})`
          }
        }
      />
      {item.smallAndMediumStyleType !== "noTitle" && (
        <span
          className={cx(styles.title, styles[item.smallAndMediumStyleType])}
        >
          {item.label.substring(0, 24)}
        </span>
      )}
    </div>
    <div className={styles.description}>
      {item.subtitle && item.subtitle.substring(0, 45)}
    </div>
  </NavAnchor>
);

InspirationItem.propTypes = {
  item: navigationItemPropType.isRequired
};

export default InspirationItem;
