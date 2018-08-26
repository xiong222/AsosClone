import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import {
  trackNavOpen,
  getGender,
  ANALYTICS_INTERACTION_HOVER,
  ANALYTICS_INTERACTION_CLICK,
  ANALYTICS_POSITION_HEADER,
  ANALYTICS_CONTEXT
} from '../../../../helpers/events';
import { genderPropType } from '../../../state/modules/layout';
import { navigationPropType } from '../../../state/modules/navigation';
import globalEventHandler, {
  keys,
  events,
  focusFloorNavigationFor
} from '../../../globalEventHandler';
import withViewport from '../../Viewport/withViewport';
import LargeSecondaryNavigation from '../LargeSecondaryNavigation';
import styles from './index.css';

const cx = classnames.bind(styles);

const DOCUMENT_POSITION_CONTAINS = 8;
const HOVER_DELAY = 250;

class LargePrimaryNavigation extends Component {
  globalTrackingTimer = null;

  constructor() {
    super();
    this.state = {
      isTouch: false
    };
  }

  handleKeyDown = /* istanbul ignore next - focus is not supported in jsdom */ (event) => {
    if (event.key === keys.tab && event.originalEvent.shiftKey) {
      if (
        document.activeElement.attributes['data-id'] &&
        this.props.items[0].id ===
        document.activeElement.attributes['data-id'].value
      ) {
        event.originalEvent.preventDefault();
        focusFloorNavigationFor(this.props.forGender);
      }
    }
  };

  componentDidMount() {
    this.keyDownEventListener = globalEventHandler.addListener(
      events.keyDown,
      this.handleKeyDown
    );
  }

  componentWillUnmount() {
    this.keyDownEventListener && this.keyDownEventListener.remove();
  }

  isHidden = () => this.props.forGender !== this.props.currentGender;

  handleActiveChild = (id) => {
    this.props.setNavActiveItem(id);
  };

  getCurrentItemFromEvent(event) {
    const currentId = event.currentTarget.attributes['data-id'].value;
    return this.props.items.find((item) => item.id === currentId);
  }

  handleClick = (event) => {
    const current = this.getCurrentItemFromEvent(event);
    this.handleActiveChild(current.id);
    this.track(current.label, ANALYTICS_INTERACTION_CLICK);
  };

  handleMouseEnter = (event) => {
    const current = this.getCurrentItemFromEvent(event);
    this.delayedHover = setTimeout(() => {
      this.handleActiveChild(current.id);
      this.beginTracking(current.label);
    }, HOVER_DELAY);
  };

  handleMouseLeave = (event) => {
    if (this.state.isTouch) {
      event.preventDefault();
    } else {
      if (this.delayedHover) {
        clearTimeout(this.delayedHover);
        this.delayedHover = null;
      }
      this.clearTracking();
    }
  };

  handleTouchStart = () => {
    this.setState({ isTouch: true });
    setTimeout(() => {
      this.setState({ isTouch: false });
    }, 600);
  };

  track = (label, interaction) => {
    const context =
      interaction === 'click'
        ? ANALYTICS_CONTEXT.openNav
        : ANALYTICS_CONTEXT.navHover;

    trackNavOpen({
      context,
      interaction,
      elementText: label,
      properties: {
        positionOnPage: ANALYTICS_POSITION_HEADER,
        gender: getGender(this.props.forGender)
      }
    });
  };

  beginTracking = (label) => {
    this.globalTrackingTimer = setTimeout(
      () => this.track(label, ANALYTICS_INTERACTION_HOVER),
      2000
    );
  };

  clearTracking = () => {
    clearTimeout(this.globalTrackingTimer);
  };

  hasClickedInside = (event) =>
    (event.target.compareDocumentPosition(this.container) &
      DOCUMENT_POSITION_CONTAINS) !==
    0;

  render() {
    const { items, largeNavActiveItemId, isVisible } = this.props;

    return (
      <nav
        aria-hidden={this.isHidden()}
        className={cx([styles.container], {
          [styles.container__hidden]: !isVisible || this.isHidden()
        })}
        data-testid="primarynav-large"
        ref={(container) => (this.container = container)}
      >
        <div className={styles.navigation}>
          <div className={styles.navButtons}>
            {items.map(({ id, label, largeScreenStyleType }) => (
              <button
                key={id}
                data-id={id}
                className={cx(styles.navButton, {
                  [styles.navButton__active]: id === largeNavActiveItemId
                })}
                data-testid="primarynav-button"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onTouchStart={this.handleTouchStart}
              >
                <span
                  className={cx({
                    [styles.slant]: largeScreenStyleType === 'sale',
                    [styles.bold]: largeScreenStyleType === 'premium'
                  })}
                >
                  <span>{label}</span>
                </span>
              </button>
            ))}
          </div>

          {items.map((item) => (
            <LargeSecondaryNavigation
              item={item}
              key={item.id}
              hasClickedInside={this.hasClickedInside}
            />
          ))}
        </div>
      </nav>
    );
  }
}

LargePrimaryNavigation.propTypes = {
  forGender: genderPropType.isRequired,
  currentGender: genderPropType.isRequired,
  items: PropTypes.arrayOf(navigationPropType).isRequired,
  setNavActiveItem: PropTypes.func.isRequired,
  largeNavActiveItemId: PropTypes.string,
  isVisible: PropTypes.bool
};

export default withViewport(LargePrimaryNavigation);
