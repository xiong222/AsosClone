import React from "react";
import { navigationPropType } from "../../../../state/modules/navigation";
import NavAnchor from "../../NavAnchor";
import styles from "./index.css";

const ViewAllBlock = ({ item }) => (
  <li className={styles.block}>
    <div className={styles.fakeOutsideBlock}>
      <NavAnchor item={item}>{item.label}</NavAnchor>
    </div>
  </li>
);

ViewAllBlock.propTypes = {
  item: navigationPropType.isRequired
};

export default ViewAllBlock;
