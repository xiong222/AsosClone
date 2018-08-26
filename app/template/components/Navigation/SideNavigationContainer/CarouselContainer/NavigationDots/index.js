import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { navigationPropType } from "../../../../../state/modules/navigation";
import styles from "./index.css";

const cx = classnames.bind(styles);

const renderOnlyIf = (predicate, component) => props =>
  predicate(props) ? component(props) : null;

const hasMultipleItems = ({ items }) => items.length > 1;

const NavigationDots = renderOnlyIf(
  hasMultipleItems,
  ({ items, currentIndex, setCurrentItem }) => (
    <ul className={styles.dotContainer} data-testid="navigation-dots">
      {items.map((item, index) => (
        <li key={item.id} className={styles.dotItem}>
          <button
            type="button"
            className={cx(styles.dot, {
              [styles.dot__selected]: index === currentIndex
            })}
            onClick={setCurrentItem(index)}
            onFocus={setCurrentItem(index)}
            aria-label={item.label}
          />
        </li>
      ))}
    </ul>
  )
);

NavigationDots.propTypes = {
  items: PropTypes.arrayOf(navigationPropType).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentItem: PropTypes.func.isRequired
};

export default NavigationDots;
