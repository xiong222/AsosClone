import { createSelector } from "reselect";
import { SUCCESS, FAILED } from "./constants";
import {DEFAULT_STATE} from "../constants";

const getUser = state => {
  // state = DEFAULT_STATE;
  return state.user;
};

export const isLoggedIn = createSelector(getUser, user => user.isLoggedIn);

export const getHasErrors = createSelector(getUser, user => user.hasError);

export const getFirstName = createSelector(
  getUser,
  user => user.profile.firstName
);

export const getIsOptInLoading = createSelector(
  getUser,
  user => user.isOptInLoading
);

export const getIsOptOutLoading = createSelector(
  getUser,
  user => user.isOptOutLoading
);

export const getCustomerGuid = createSelector(
  getUser,
  user => user.profile.customerGuid
);

export const getIsRecognised = createSelector(
  getUser,
  user => user.profile.isRecognised
);

export const getCustomerId = createSelector(
  getUser,
  user => user.profile.customerId
);

export const getHasReconsented = createSelector(
  getUser,
  user => user.hasReconsented
);

export const getIsReconsentRequired = createSelector(
  getUser,
  user => user.isReconsentRequired
);

export const getIdentityHasResponded = createSelector(getUser, user =>
  [SUCCESS, FAILED].includes(user.fetchingStatus)
);

export const getIsPremier = createSelector(
  getUser,
  user => !!(user && user.profile && user.profile.subscriptions)
);

export const getPreferences = createSelector(getUser, user => user.preferences);

export const getPrivacyUrlSegment = createSelector(
  getUser,
  user => user.privacyUrlSegment
);

export const getTermsUrlSegment = createSelector(
  getUser,
  user => user.termsUrlSegment
);

