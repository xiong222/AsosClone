import React from "react";
import NavAnchor from "../../NavAnchor";
import { navigationItemPropType } from "../../../../state/modules/navigation";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";

import styles from "./index.css";
import classnames from "classnames";

const cx = classnames.bind(styles);

const MAX_ITEM_COUNT = 4;
const MAX_LETTER_COUNT = 26;

const GridCircleImage = ({ item }) => {
  const items = [].concat(item.items);
  return (
    <div className={styles.container}>
      {items.splice(0, MAX_ITEM_COUNT).map(gridItem)}
    </div>
  );
};

const gridItem = item => (
  <NavAnchor
    key={item.id}
    item={item}
    className={cx(styles.gridItem, {
      [styles.gridItem__sale]: item.largeScreenStyleType === "sale"
    })}
  >
    <div className={styles.gridItemImageBorder}>
      <div
        aria-hidden="true"
        className={styles.gridItemImage}
        role="presentation"
        style={{
          backgroundImage: `url(${getBackgroundImageUrl(
            item.largeScreenImageUrl,
            240
          )})`
        }}
        title={item.label}
      />
    </div>
    <span>{item.label.substr(0, MAX_LETTER_COUNT)}</span>
  </NavAnchor>
);

GridCircleImage.propTypes = {
  item: navigationItemPropType.isRequired
};

export default GridCircleImage;
