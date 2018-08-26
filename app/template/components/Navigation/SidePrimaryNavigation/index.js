import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { genderPropType, FEMALE, DEFAULT } from '../../../state/modules/layout';
import { navigationPropType } from '../../../state/modules/navigation';
import SideNavigationContainer from '../SideNavigationContainer';
import globalEventHandler, {
  events,
  keys,
  focusFloorNavigationFor
} from '../../../globalEventHandler';
import styles from './index.css';

const isVisible = (navActiveItem, forGender, currentGender) =>
  !navActiveItem &&
  (forGender === currentGender ||
    (forGender === FEMALE && currentGender === DEFAULT));

class SidePrimaryNavigation extends Component {
  selectFirstNavigationItem = /* istanbul ignore next - focus is not supported in jsdom  */ (selectedGender) => {
    if (selectedGender === this.props.forGender) {
      this.firstItem && this.firstItem.focus();
    }
  };

  handleKeyDown = /* istanbul ignore next - focus is not supported in jsdom  */ (event) => {
    if (event.key === keys.tab && event.originalEvent.shiftKey) {
      if (this.firstItem && this.firstItem === document.activeElement) {
        event.originalEvent.preventDefault();
        focusFloorNavigationFor(this.props.forGender);
      }
    }
  };

  componentDidMount() {
    this.removeFloorSelectedEventHandler = globalEventHandler.addListener(
      events.focusFirstPrimaryNavigationItem,
      this.selectFirstNavigationItem
    );

    this.keyDownEventListener = globalEventHandler.addListener(
      events.keyDown,
      this.handleKeyDown
    );
  }

  componentWillUnmount() {
    this.removeFloorSelectedEventHandler &&
    this.removeFloorSelectedEventHandler.remove();
    this.keyDownEventListener && this.keyDownEventListener.remove();
  }

  saveNavigationItem = /* istanbul ignore next - focus is not supported in jsdom  */ (component) => {
    if (typeof this.firstItem === 'undefined') {
      this.firstItem = component;
    }
  };

  // will use item.display.mobileDisplayLayout to decide the type of the container
  renderContainer = (item) => (
    <SideNavigationContainer
      key={item.id}
      item={item}
      setNavActiveItem={this.props.setNavActiveItem}
      saveNavigationItem={this.saveNavigationItem}
    />
  );

  render() {
    const {
      forGender,
      currentGender,
      navActiveItem,
      items: groupNavigationItems
    } = this.props;
    const visible = isVisible(navActiveItem, forGender, currentGender);

    return (
      <nav
        className={styles.container}
        aria-hidden={!visible}
        data-testid="sidePanel-itemsList"
      >
        {groupNavigationItems.map(this.renderContainer)}
      </nav>
    );
  }
}

SidePrimaryNavigation.propTypes = {
  forGender: genderPropType.isRequired,
  currentGender: genderPropType.isRequired,
  items: PropTypes.arrayOf(navigationPropType).isRequired,
  setNavActiveItem: PropTypes.func.isRequired,
  navActiveItem: PropTypes.string
};

export default SidePrimaryNavigation;
