import React from "react";
import { navigationPropType } from "../../../../state/modules/navigation";
import CircleImageLink from "./CircleImageLink";
import styles from "./index.css";

const CircleImageList = ({ item: { items: links } }) => {
  return (
    <div className={styles.circleImageList}>
      {links.map(item => <CircleImageLink item={item} key={item.id} />)}
    </div>
  );
};

CircleImageList.propTypes = {
  item: navigationPropType.isRequired
};

export default CircleImageList;
