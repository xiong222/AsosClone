import React from "react";
import classnames from "classnames";
import {
  navigationPropType,
  UL_ITEM_COUNT
} from "../../../../state/modules/navigation";
import NavAnchor from "../../NavAnchor";
import styles from "../index.css";

const cx = classnames.bind(styles);

const makeUl = (items, i) => (
  <ul key={i} className={styles.textList}>
    {items.map(item => (
      <li key={item.id}>
        <NavAnchor
          className={cx(styles.textLink, {
            [styles.textLink__sale]: item.largeScreenStyleType === "sale",
            [styles.textLink__bold]: item.largeScreenStyleType === "premium"
          })}
          item={item}
          data-testid="text-link"
        >
          {item.label.substring(0, 32)}
        </NavAnchor>
      </li>
    ))}
  </ul>
);

const TextList = ({ item }) => {
  // split items array into a set of arrays
  // with max size of 9 (max text list length)
  const lists = [];
  const items = [].concat(item.items);
  const maxUlLength =
    items.length / 2 > UL_ITEM_COUNT
      ? Math.ceil(items.length / 2)
      : UL_ITEM_COUNT;
  while (items.length) lists.push(items.splice(0, maxUlLength));

  return <div>{lists.map(makeUl)}</div>;
};

TextList.propTypes = {
  item: navigationPropType.isRequired
};

export default TextList;
