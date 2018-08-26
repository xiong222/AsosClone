import PropTypes from 'prop-types';
import { BounceEffect } from './helpers/bounceeffect';
import {
  UPDATE_VIEWPORT_CATEGORY,
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  LARGE_VIEWPORT,
  SET_GENDER,
  OPEN_SIDE_PANEL,
  CLOSE_SIDE_PANEL,
  MALE,
  FEMALE,
  DEFAULT,
  OPEN_COOKIE_MESSAGE,
  CLOSE_COOKIE_MESSAGE
} from './constants';

export {
  MALE,
  FEMALE,
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  LARGE_VIEWPORT,
  DEFAULT,
  SECURE
} from './constants';

export {
  setGender,
  openSidePanel,
  closeSidePanel,
  openCookieMessage,
  closeCookieMessage,
  updateViewportCategory
} from './actions';

export {
  isFemale,
  isMale,
  hasGender,
  isSidePanelOpen,
  getViewport,
  isCookieMessageOpen,
  getCurrentGender,
  getPlatform
} from './selectors';

export const genderPropType = PropTypes.oneOf([MALE, FEMALE, DEFAULT]);
export const viewportPropType = PropTypes.oneOf([
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  LARGE_VIEWPORT
]);

const initialState = {};

const needsBounceEffect = () => {
  const testDiv = document.createElement('div');
  document.documentElement.appendChild(testDiv);
  testDiv.style.WebkitOverflowScrolling = 'touch';
  const scrollSupport =
    'getComputedStyle' in window &&
    window.getComputedStyle(testDiv)['-webkit-overflow-scrolling'] === 'touch';
  document.documentElement.removeChild(testDiv);
  return scrollSupport;
};

BounceEffect.disable();

const validateViewport = (state, viewportCategory) =>
  [SMALL_VIEWPORT, MEDIUM_VIEWPORT, LARGE_VIEWPORT].includes(viewportCategory)
    ? viewportCategory
    : state.viewportCategory;

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT_CATEGORY:
      return {
        ...state,
        viewportCategory: validateViewport(
          state,
          action.payload.viewportCategory
        )
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload
      };
    case OPEN_SIDE_PANEL:
      document.body.classList.add('chrome-hide-overflow');
      if (needsBounceEffect()) {
        BounceEffect.enable();
      }
      return {
        ...state,
        isSidePanelOpen: true
      };
    case CLOSE_SIDE_PANEL:
      document.body.classList.remove('chrome-hide-overflow');
      BounceEffect.disable();
      return {
        ...state,
        isSidePanelOpen: false
      };

    case OPEN_COOKIE_MESSAGE:
      return {
        ...state,
        isCookieMessageOpen: true
      };
    case CLOSE_COOKIE_MESSAGE:
      return {
        ...state,
        isCookieMessageOpen: false
      };
  }

  return state;
};
