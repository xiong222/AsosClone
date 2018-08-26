import { createSelector } from 'reselect';
import { MALE, FEMALE } from './constants';

const getLayout = state => {
  // state = DEFAULT_STATE;
  return state.layout;
};

export const getViewport = createSelector(
  getLayout,
  layout => layout.viewportCategory
);

export const isSidePanelOpen = createSelector(
  getLayout,
  layout => layout.isSidePanelOpen
);

export const hasGender = createSelector(
  getLayout,
  layout => layout.gender === FEMALE || layout.gender === MALE
);

export const isFemale = createSelector(
  getLayout,
  layout => layout.gender === FEMALE
);

export const isMale = createSelector(
  getLayout,
  layout => layout.gender === MALE
);

export const getCurrentGender = createSelector(
  getLayout,
  layout => layout.gender
);

export const isCookieMessageOpen = createSelector(
  getLayout,
  layout => layout.isCookieMessageOpen
);

export const getPlatform = createSelector(getLayout, layout => layout.platform);

