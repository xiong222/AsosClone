import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import {
  MALE,
  FEMALE,
  LARGE_VIEWPORT,
  viewportPropType
} from '../../state/modules/layout';
import globalEventHandler, {
  events,
  focusPrimaryNavigationFor
} from '../../globalEventHandler';
import withTranslation from '../translation';
import styles from './FloorNavigation.css';

const cx = classnames.bind(styles);

class FloorNavigation extends PureComponent {
  floors = {};

  selectFloor /* istanbul ignore next - focus is not supported in jsdom */ = (gender) => {
    this.floors[gender].focus();
  };

  componentDidMount() {
    this.focusFloorEventHandler = globalEventHandler.addListener(
      events.focusBackToFloor,
      this.selectFloor
    );
  }

  componentWillUnmount() {
    this.focusFloorEventHandler && this.focusFloorEventHandler.remove();
  }

  handleFemaleClick = () => {
    this.setGender(FEMALE);
  };

  handleMaleClick = () => {
    this.setGender(MALE);
  };

  setGender(gender) {
    this.props.setGender(gender);
    focusPrimaryNavigationFor(gender);
  }

  isSelected(gender) {
    const { isFemale, isMale, viewport } = this.props;

    if (gender === MALE) {
      return isMale;
    }

    if (viewport === LARGE_VIEWPORT) {
      return isFemale;
    }

    return !isMale;
  }

  render() {
    const {
      formatTranslation,
      menStoreUrl,
      womenStoreUrl,
      viewport,
      viewable
    } = this.props;

    const MenuTagType = viewport === LARGE_VIEWPORT ? 'a' : 'button';
    const womenMenuActionProp =
      viewport === LARGE_VIEWPORT
        ? { href: womenStoreUrl }
        : { onClick: this.handleFemaleClick };
    const menMenuActionProp =
      viewport === LARGE_VIEWPORT
        ? { href: menStoreUrl }
        : { onClick: this.handleMaleClick };

    return (
      <ul
        className={cx(styles.container, {
          [styles.container__large]: viewable.includes(LARGE_VIEWPORT)
        })}
        data-testid="floornav"
      >
        <li>
          <MenuTagType
            className={cx(styles.button, {
              [styles.selected]: this.isSelected(FEMALE)
            })}
            data-testid="women-floor"
            ref={(el) => (this.floors[FEMALE] = el)}
            {...womenMenuActionProp}
          >
            {formatTranslation('Header.WomenFloor')}
          </MenuTagType>
        </li>
        <li>
          <MenuTagType
            className={cx(styles.button, {
              [styles.selected]: this.isSelected(MALE)
            })}
            data-testid="men-floor"
            ref={(el) => (this.floors[MALE] = el)}
            {...menMenuActionProp}
          >
            {formatTranslation('Header.MenFloor')}
          </MenuTagType>
        </li>
      </ul>
    );
  }
}

FloorNavigation.propTypes = {
  formatTranslation: PropTypes.func.isRequired,
  isFemale: PropTypes.bool,
  isMale: PropTypes.bool,
  setGender: PropTypes.func.isRequired,
  viewport: viewportPropType,
  menStoreUrl: PropTypes.string,
  womenStoreUrl: PropTypes.string,
  viewable: PropTypes.arrayOf(viewportPropType)
};

FloorNavigation.defaultProps = {
  isFemale: false,
  isMale: false,
  menStoreUrl: 'men',
  womenStoreUrl: 'women',
  viewable: []
};

export default withTranslation(FloorNavigation);

