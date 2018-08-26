import React from "react";
import classnames from "classnames";
import { navigationItemPropType } from "../../../../state/modules/navigation";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";

import NavAnchor from "../../NavAnchor";
import styles from "./index.css";

const cx = classnames.bind(styles);

const CircleImageLink = ({ item }) => {
  const { label, largeScreenImageUrl, largeScreenStyleType } = item;

  return (
    <div className={styles.circleImageLink}>
      <NavAnchor item={item}>
        <div className={styles.circleImageBorder}>
          <div
            aria-hidden="true"
            className={styles.circleImage}
            role="presentation"
            style={{
              backgroundImage: `url(${getBackgroundImageUrl(
                largeScreenImageUrl,
                240
              )})`
            }}
          />
        </div>
        <span
          className={cx(styles.label, {
            [styles.label__sale]: largeScreenStyleType === "sale",
            [styles.label__bold]: largeScreenStyleType === "premium"
          })}
        >
          {label.substring(0, 16)}
        </span>
      </NavAnchor>
    </div>
  );
};

CircleImageLink.propTypes = {
  item: navigationItemPropType.isRequired
};

export default CircleImageLink;
