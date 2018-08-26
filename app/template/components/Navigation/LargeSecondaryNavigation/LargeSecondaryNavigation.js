import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigationPropType } from '../../../state/modules/navigation';
import {
  viewportPropType,
  LARGE_VIEWPORT
} from '../../../state/modules/layout';
import styles from './index.css';
import classnames from 'classnames/bind';
import globalEventHandler, { events, keys } from '../../../globalEventHandler';
import { getDesktopTemplate } from '../../../helpers/navigationTemplatesResolver';
import Spinner from '../../Spinner';

const cx = classnames.bind(styles);

const inferTemplateComponent = (item) => {
  const { largeScreenTemplateId: id } = item;
  const TemplateComponent = getDesktopTemplate(id);

  return <TemplateComponent item={item} />;
};

class LargeSecondaryNavigation extends Component {
  isVisible = () =>
    this.props.item.id === this.props.largeNavActiveItemId &&
    this.props.viewport === LARGE_VIEWPORT;

  globalTrackingTimer = null;

  componentDidMount() {
    const { hasClickedInside, clearNavActiveItem } = this.props;

    this.globalClickListener = globalEventHandler.addListener(
      events.click,
      (event) => {
        if (this.isVisible() && !hasClickedInside(event)) {
          clearNavActiveItem();
        }
      }
    );
    this.globalKeyDownListener = globalEventHandler.addListener(
      events.keyDown,
      (event) => {
        if (event.key === keys.escape) {
          clearNavActiveItem();
        }
      }
    );
  }

  componentWillUnmount() {
    this.globalClickListener && this.globalClickListener.remove();
    this.globalKeyDownListener && this.globalKeyDownListener.remove();
  }

  renderHeading = (label) => {
    if (!label) return null;
    return (
      <div className={styles.columnHeaderContainer}>
        <span className={styles.columnHeader}>{label}</span>
      </div>
    );
  };

  renderContainer = (item) => {
    const { largeScreenStyleType, largeScreenColumnSpan } = item;
    const showHeading = largeScreenStyleType !== 'noTitle';

    return (
      <section
        key={item.id}
        className={cx(
          styles.column,
          styles[`colspan-${largeScreenColumnSpan || 1}`]
        )}
      >
        {showHeading && this.renderHeading(item.label)}
        {inferTemplateComponent(item)}
      </section>
    );
  };

  render() {
    const { item, clearNavActiveItem } = this.props;
    const classes = cx(styles.container, {
      [styles.visible]: this.isVisible()
    });

    const hasNoItems = !item.items.length;

    // The window type checking is a work around to
    // make the classes match server and client side
    const flyoutClasses = cx(styles.flyout, {
      [styles.isLoading]: hasNoItems || typeof window === 'undefined'
    });

    return (
      <div
        className={classes}
        data-testid="secondarynav-container"
        ref={(c) => (this.container = c)}
      >
        <div
          className={styles.backdrop}
          onClick={clearNavActiveItem}
          onMouseEnter={clearNavActiveItem}
          aria-hidden="true"
          data-testid="backdrop"
        />
        <div className={styles.flyoutContainer}>
          <div
            className={flyoutClasses}
            data-id={item.id}
            data-testid="secondarynav-flyout"
          >
            {hasNoItems ? (
              <Spinner size="x-large" />
            ) : (
              item.items.map(this.renderContainer)
            )}
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    item: navigationPropType.isRequired,
    largeNavActiveItemid: PropTypes.string,
    setNavActiveItem: PropTypes.func.isRequired,
    clearNavActiveItem: PropTypes.func.isRequired,
    buttonElement: PropTypes.object,
    viewport: viewportPropType.isRequired,
    hasClickedInside: PropTypes.func.isRequired
  };
}

export default LargeSecondaryNavigation;
