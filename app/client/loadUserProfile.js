import logger from "../helpers/logger";
import { getCookieValue, removeCookie } from "./context/cookies";
import { IDENTITY_SDK_RESET_COOKIE } from "./constants";
import {
  setLoggedInState,
  setUserProfile,
  setUserFetchingState,
  setUserReconsentStatus,
  SUCCESS,
  FETCHING,
  FAILED
} from "../template/state/modules/user";
import { stripSubdomain } from "../helpers/url";

const fetchUserProfile = store => {
  if (!window.__sdk || !window.__sdk.identity) return;

  const { identity: identitySDK } = window.__sdk;

  if (getCookieValue(IDENTITY_SDK_RESET_COOKIE) === "true") {
    const domain = `.${stripSubdomain(window.location.hostname)}`;

    identitySDK.customer.resetLocalCopy();
    removeCookie(IDENTITY_SDK_RESET_COOKIE, domain);
  }

  store.dispatch(setUserFetchingState(FETCHING));

  return identitySDK.customer
    .profile()
    .then(profile => {
      if (!profile) {
        throw new Error("Empty profile");
      }

      store.dispatch(setUserFetchingState(SUCCESS));
      store.dispatch(setUserProfile(profile));
      store.dispatch(setLoggedInState(profile.isAuthenticated));

      if (profile.isAuthenticated || profile.isRecognised) {
        return identitySDK.customer
          .isReconsentRequired()
          .then(reconsentRequired =>
            store.dispatch(setUserReconsentStatus(reconsentRequired))
          )
          .catch(logger.warn);
      }
    })
    .catch(() => {
      store.dispatch(setUserFetchingState(FAILED));
    });
};

export default store => {
  if (window.__sdk && window.__sdk.identity) {
    return fetchUserProfile(store);
  } else {
    return window.analyticsEventEmitter.addListener("sdk-ready", () =>
      fetchUserProfile(store)
    );
  }
};
