import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import CarouselLink from "./CarouselLink";
import styles from "./index.css";
import { navigationPropType } from "../../../../../state/modules/navigation";
import { viewportPropType } from "../../../../../state/modules/layout";

const cx = classnames.bind(styles);

const Carousel = ({ items, currentIndex, swipeOffset }) => {
  const activeItemPosition = `${-100 * currentIndex}%`;

  return (
    <ul
      className={cx(styles.list, { [styles.list__animate]: swipeOffset === 0 })}
      style={{
        transform: `translateX(${activeItemPosition}) translateX(${swipeOffset}px)`
      }}
      data-testid="carousel"
    >
      {items.map(item => (
        <CarouselLink
          key={item.id}
          className={styles.carouselLink}
          item={item}
          tabIndex={items.length > 1 ? -1 : null}
        />
      ))}
    </ul>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(navigationPropType).isRequired,
  currentIndex: PropTypes.number.isRequired,
  viewportCategory: viewportPropType,
  swipeOffset: PropTypes.number.isRequired
};

export default Carousel;
