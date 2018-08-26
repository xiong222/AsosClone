import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";
import Carousel from "./Carousel";
import { viewportPropType } from "../../../../state/modules/layout";
import NavigationDots from "./NavigationDots";
import { navigationPropType } from "../../../../state/modules/navigation";

class CarouselContainer extends PureComponent {
  state = {
    currentIndex: 0,
    swipeOffset: 0
  };

  setCurrentItem = currentIndex => () => this.setState({ currentIndex });

  isNextChevronVisible = () =>
    this.state.currentIndex < this.props.item.items.length - 1;

  isPreviousChevronVisible = () => this.state.currentIndex > 0;

  isSingleItem = () => this.props.item.items.length === 1;

  startingTouchX = null;

  touchMoveFrameRequest = null;

  touchEndFrameRequest = null;

  touchStart = ({ touches }) => {
    if (!this.isSingleItem()) {
      this.startingTouchX = this.startingTouchX || touches[0].clientX;
    }
  };

  touchMove = ({ touches }) => {
    cancelAnimationFrame(this.touchMoveFrameRequest);
    this.touchMoveFrameRequest = requestAnimationFrame(() => {
      this.requested = false;
      if (this.startingTouchX) {
        this.setState({
          swipeOffset: this.adjustSwipeOffset(
            touches[0].clientX - this.startingTouchX
          )
        });
      }
    });
  };

  adjustSwipeOffset(suggestedOffset) {
    const { currentIndex } = this.state;
    const { item } = this.props;
    if (currentIndex === 0) {
      return Math.min(suggestedOffset, 40);
    } else if (currentIndex === item.items.length - 1) {
      return Math.max(suggestedOffset, -40);
    }
    return suggestedOffset;
  }

  touchEnd = event => {
    const { currentIndex, swipeOffset } = this.state;

    if (swipeOffset !== 0) {
      const swipeDirection = swipeOffset > 0 ? -1 : 1;
      cancelAnimationFrame(this.touchEndFrameRequest);
      this.touchEndFrameRequest = requestAnimationFrame(() => {
        this.requested = false;
        this.setState({
          swipeOffset: 0,
          currentIndex: this.adjustSuggestedIndex(currentIndex + swipeDirection)
        });
      });
      event.preventDefault();
    }

    this.startingTouchX = null;
  };

  adjustSuggestedIndex(suggestedIndex) {
    const { item } = this.props;
    if (suggestedIndex < 0) {
      return 0;
    }
    if (suggestedIndex > item.items.length - 1) {
      return item.items.length - 1;
    }
    return suggestedIndex;
  }

  renderChevrons() {
    const { currentIndex } = this.state;

    if (this.isSingleItem()) {
      return null;
    }

    return [
      this.isPreviousChevronVisible() && (
        <button
          type="button"
          className={styles.chevronLeft}
          tabIndex={-1}
          onClick={this.setCurrentItem(currentIndex - 1)}
          key="1"
          aria-hidden="true"
          data-testid="left-chevron"
        />
      ),
      this.isNextChevronVisible() && (
        <button
          type="button"
          className={styles.chevronRight}
          tabIndex={-1}
          onClick={this.setCurrentItem(currentIndex + 1)}
          key="2"
          aria-hidden="true"
          data-testid="right-chevron"
        />
      )
    ];
  }

  render() {
    const { currentIndex, swipeOffset } = this.state;
    const {
      item,
      setNavActiveItem,
      saveNavigationItem,
      viewportCategory
    } = this.props;

    return (
      <div className={styles.container}>
        <div
          className={styles.hitArea}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
          onTouchCancel={this.touchEnd}
          data-testid="carousel-area"
        >
          <Carousel
            items={item.items}
            setNavActiveItem={setNavActiveItem}
            saveNavigationItem={saveNavigationItem}
            currentIndex={currentIndex}
            viewportCategory={viewportCategory}
            swipeOffset={swipeOffset}
          />
          <NavigationDots
            items={item.items}
            currentIndex={currentIndex}
            setCurrentItem={this.setCurrentItem}
          />
          {this.renderChevrons()}
        </div>
      </div>
    );
  }
}

CarouselContainer.propTypes = {
  item: navigationPropType,
  setNavActiveItem: PropTypes.func.isRequired,
  saveNavigationItem: PropTypes.func.isRequired,
  viewportCategory: viewportPropType.isRequired
};

export default CarouselContainer;
