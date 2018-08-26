import {
  LOADING_OPT_IN,
  LOADING_OPT_OUT,
  LOG_IN_USER,
  SET_OPT_IN,
  SET_OPT_OUT,
  SET_USER_FETCHING_STATUS,
  SET_USER_PREFERENCES,
  SET_USER_PROFILE,
  SET_USER_RECONSENT_STATUS
} from "./constants";

export { SUCCESS, FAILED, FETCHING } from "./constants";
export {
  getCustomerGuid,
  getCustomerId,
  getFirstName,
  getHasErrors,
  getHasReconsented,
  getIdentityHasResponded,
  getIsOptInLoading,
  getIsOptOutLoading,
  getIsPremier,
  getIsRecognised,
  getIsReconsentRequired,
  getPreferences,
  getPrivacyUrlSegment,
  getTermsUrlSegment,
  isLoggedIn
} from "./selectors";
export {
  optIn,
  optOut,
  setLoggedInState,
  setUserFetchingState,
  setUserPreferences,
  setUserProfile,
  setUserReconsentStatus
} from "./actions";

const initialState = {
  fetchingStatus: null,
  isLoggedIn: false,
  isReconsentRequired: false,
  preferences: [],
  profile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_OPT_IN:
      return {
        ...state,
        isOptInLoading: true
      };
    case LOADING_OPT_OUT:
      return {
        ...state,
        isOptOutLoading: true
      };
    case LOG_IN_USER:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case SET_USER_FETCHING_STATUS:
      return {
        ...state,
        fetchingStatus: action.payload
      };
    case SET_USER_RECONSENT_STATUS:
      return {
        ...state,
        isReconsentRequired: action.payload
      };
    case SET_USER_PREFERENCES:
      return {
        ...state,
        preferences: action.payload.preferences,
        privacyUrlSegment: action.payload.privacyPolicyUrlSegment,
        termsUrlSegment: action.payload.termsConditionsUrlSegment
      };
    case SET_OPT_IN:
      return {
        ...state,
        hasError: !!action.error,
        hasReconsented: action.error ? null : true,
        isOptInLoading: false,
        isReconsentRequired: !!action.error
      };
    case SET_OPT_OUT:
      return {
        ...state,
        hasError: !!action.error,
        hasReconsented: action.error ? null : false,
        isOptOutLoading: false,
        isReconsentRequired: !!action.error
      };
    default:
      return state;
  }
};
