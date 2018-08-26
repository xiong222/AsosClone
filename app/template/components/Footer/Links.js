import React from "react";
import PropTypes from "prop-types";
import LinkGroup from "./LinkGroup";
import CountrySelectorButton from "../CountrySelectorButton";
import styles from "./Links.css";
import { ANALYTICS_POSITION_FOOTER } from "../../../helpers/events";

/*
<div className={styles.container}>
    <div className={styles.body}>
      {groupItems.map(groupItem => (
        <LinkGroup
          key={groupItem.id}
          groupItem={groupItem}
          isAccordion={isAccordion}
        />
      ))}
      <div className={styles.group}>
        <CountrySelectorButton
          withLabels={true}
          position={ANALYTICS_POSITION_FOOTER}
        />
      </div>
    </div>
  </div>
 */
const Links = ({ items: groupItems, isAccordion }) => (
  <div className={styles.container}>
    <div className={styles.body}>
      {groupItems.map(groupItem => (
        <LinkGroup
          key={groupItem.id}
          groupItem={groupItem}
          isAccordion={isAccordion}
        />
      ))}
      <div className={styles.group}>
        <CountrySelectorButton
          withLabels={true}
          position={ANALYTICS_POSITION_FOOTER}
        />
      </div>
    </div>
  </div>
);

Links.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  isAccordion: PropTypes.bool
};

Links.defaultProps = {
  isAccordion: false
};

export default Links;
