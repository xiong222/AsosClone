import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import {
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT
} from '../../../state/modules/layout/constants';
import { navigationPropType } from '../../../state/modules/navigation';
import { MALE, FEMALE, genderPropType } from '../../../state/modules/layout';
import FloorNavigation from '../../FloorNavigation';
import SidePrimaryNavigation from '../SidePrimaryNavigation';
import SideSecondaryNavigation from '../SideSecondaryNavigation';
import withTranslation from '../../translation';
import withViewport from '../../Viewport/withViewport';
import Footer from '../../Footer';
import styles from './index.css';

const cx = classnames.bind(styles);

class SidePanel extends PureComponent {
  shouldAnimate = false;

  /* istanbul ignore next - focus is not supported in jsdom */
  componentDidUpdate({ isSidePanelOpen }) {
    if (this.props.isSidePanelOpen !== isSidePanelOpen && this.component) {
      this.component.focus();
    }
  }
  /* istanbul ignore next - dom el eventlistener is not supported in jsdom */
  componentDidMount() {
    this.dialog.addEventListener('transitionend', this.handleTransitionEnd);
  }

  /* istanbul ignore next - dom el eventlistener is not supported in jsdom */
  componentWillUnmount() {
    this.dialog.removeEventListener('transitionend', this.handleTransitionEnd);
  }

  handleTransitionEnd = /* istanbul ignore next - dom el eventlistener is not supported in jsdom */ ({
    target,
    currentTarget
  }) => {
    this.triggerRedraw();
    if (target === currentTarget) {
      this.props.clearNavActiveItem();
    }
  };

  /* istanbul ignore next - dom el eventlistener is not supported in jsdom */
  triggerRedraw() {
    this.dialog.style.display = 'none';
    this.dialog.offsetHeight;
    this.dialog.style.display = 'block';
  }

  saveDialog = (component) => (this.dialog = component);

  render() {
    const {
      formatTranslation,
      isSidePanelOpen,
      isVisible,
      closeSidePanel,
      navActiveItem,
      setNavActiveItem,
      clearNavActiveItem,
      currentGender,
      maleItems,
      femaleItems
    } = this.props;
    this.shouldAnimate = this.shouldAnimate || (isSidePanelOpen && isVisible);

    const navProps = {
      currentGender,
      navActiveItem,
      setNavActiveItem,
      clearNavActiveItem
    };

    return (
      <div>
        <div
          role="dialog"
          aria-label={formatTranslation('SidePanel.NavigationLabel')}
          aria-hidden={!isSidePanelOpen}
          ref={this.saveDialog}
          className={cx(styles.dialog, {
            [styles.dialog__visible]: isSidePanelOpen && isVisible,
            [styles.dialog__animate]: this.shouldAnimate
          })}
          data-testid="sidepanel"
        >
          <div className={styles.container}>
            <button
              className={styles.close}
              onClick={closeSidePanel}
              aria-label={formatTranslation('SidePanel.CloseNavigationLabel')}
              ref={(c) => (this.component = c)}
              data-testid="close-button"
            />
            <div className={styles.dontHideButtonContainer}>
              <div
                className={cx(styles.primarySideContainer, {
                  [styles.primarySideContainer__hidden]: !!navActiveItem,
                  [styles.primarySideContainer__animate]: this.shouldAnimate
                })}
              >
                <FloorNavigation viewable={[SMALL_VIEWPORT, MEDIUM_VIEWPORT]} />
                <div className={styles.content}>
                  <SidePrimaryNavigation
                    {...navProps}
                    items={femaleItems}
                    forGender={FEMALE}
                  />
                  <SidePrimaryNavigation
                    {...navProps}
                    items={maleItems}
                    forGender={MALE}
                  />
                  <Footer isAccordion />
                </div>
              </div>
              <SideSecondaryNavigation
                {...navProps}
                items={femaleItems}
                forGender={FEMALE}
              />
              <SideSecondaryNavigation
                {...navProps}
                items={maleItems}
                forGender={MALE}
              />
            </div>
          </div>
        </div>
        <aside
          className={cx(styles.overlay, {
            [styles.overlay__show]: isSidePanelOpen && isVisible,
            [styles.overlay__animate]: this.shouldAnimate
          })}
          role="button"
          onClick={closeSidePanel}
          onTouchMove={(event) => {
            event.preventDefault();
            return false;
          }}
          aria-hidden="true"
        />
      </div>
    );
  }
}

SidePanel.propTypes = {
  isSidePanelOpen: PropTypes.bool.isRequired,
  closeSidePanel: PropTypes.func.isRequired,
  clearNavActiveItem: PropTypes.func.isRequired,
  setNavActiveItem: PropTypes.func.isRequired,
  navActiveItem: PropTypes.string,
  currentGender: genderPropType.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  maleItems: PropTypes.arrayOf(navigationPropType).isRequired,
  femaleItems: PropTypes.arrayOf(navigationPropType).isRequired
};

export default withViewport(withTranslation(SidePanel));
