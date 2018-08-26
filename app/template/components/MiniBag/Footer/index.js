import React from "react";
import styles from "./index.css";
import DeliveryProposition from "./DeliveryProposition";
import BagLinks from "./BagLinks";
import Subtotal from "./SubTotal";
import ErrorMessage from "../ErrorMessage";

const MinibagFooter = () => (
  <div data-test-id="miniBagFooter" className={styles.minibagFooter}>
    <div className={styles.error}>
      <ErrorMessage />
    </div>
    <Subtotal />
    <BagLinks />
    <DeliveryProposition />
  </div>
);

export default MinibagFooter;
