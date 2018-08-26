import {
  UPDATE_VIEWPORT_CATEGORY,
  SET_GENDER,
  OPEN_SIDE_PANEL,
  CLOSE_SIDE_PANEL,
  OPEN_COOKIE_MESSAGE,
  CLOSE_COOKIE_MESSAGE
} from './constants';

export const updateViewportCategory = viewportCategory => ({
  type: UPDATE_VIEWPORT_CATEGORY,
  payload: {
    viewportCategory
  }
});

export const setGender = gender => ({
  type: SET_GENDER,
  payload: gender
});

export const openSidePanel = () => ({
  type: OPEN_SIDE_PANEL
});

export const closeSidePanel = () => ({
  type: CLOSE_SIDE_PANEL
});

export const closeCookieMessage = () => ({
  type: CLOSE_COOKIE_MESSAGE
});

export const openCookieMessage = () => ({
  type: OPEN_COOKIE_MESSAGE
});
