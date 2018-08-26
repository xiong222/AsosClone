import React from "react";
import PropTypes from "prop-types";
import styles from "./index.css";
import withTranslation from "../../../translation";
import {
  trackMiniBagProductDelete,
  ANALYTICS_INTERACTION_CLICK,
  ANALYTICS_CONTEXT
} from "../../../../../helpers/events";

const DeleteItem = ({ deleteBagItem, id, formatTranslation }) => {
  function deleteBagItemWithTracking(id) {
    deleteBagItem(id);
    trackMiniBagProductDelete({
      interaction: ANALYTICS_INTERACTION_CLICK,
      context: ANALYTICS_CONTEXT.minibagDeleteItem,
      productId: id
    });
  }

  return (
    <button
      aria-label={formatTranslation(`MiniBag.DeleteBagItemText`)}
      className={styles.deleteItem}
      onClick={e => {
        e.stopPropagation();
        deleteBagItemWithTracking(id);
      }}
      tabIndex="-1"
    />
  );
};

DeleteItem.propTypes = {
  deleteBagItem: PropTypes.func.isRequired,
  formatTranslation: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default withTranslation(DeleteItem);
