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

const ACCEPTED_PREFERENCE_IDS = ["newness", "promos", "lifestyle", "partner"];

const formatPreferences = (preferences, isOptOut) =>
  preferences
    .filter(({ preferenceId: id }) => ACCEPTED_PREFERENCE_IDS.includes(id))
    .map(({ customerChannels, preferenceId }) => ({
      customerChannels: isOptOut ? [] : customerChannels,
      preferenceId: preferenceId
    }));

export const optIn = () => {
  return async (dispatch, _, { api, identity }) => {
    try {
      dispatch({ type: LOADING_OPT_IN });
      const userPreferences = await identity.customer.preferences();
      const userProfile = await identity.customer.profile();
      const preferences = formatPreferences(userPreferences, false);

      const response = await api.updatePreferences(
        userProfile.customerGuid,
        preferences
      );

      if (response.ok) {
        identity.customer.resetLocalCopy();
        dispatch({ type: SET_OPT_IN });
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      dispatch({ type: SET_OPT_IN, error: true, payload: err });
    }
  };
};

export const optOut = () => {
  return async (dispatch, _, { api, identity }) => {
    try {
      dispatch({ type: LOADING_OPT_OUT });
      const userPreferences = await identity.customer.preferences();
      const userProfile = await identity.customer.profile();
      const preferences = formatPreferences(userPreferences, true);

      const response = await api.updatePreferences(
        userProfile.customerGuid,
        preferences
      );

      if (response.ok) {
        identity.customer.resetLocalCopy();
        dispatch({ type: SET_OPT_OUT });
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      dispatch({ type: SET_OPT_OUT, error: true, payload: err });
    }
  };
};

export const setLoggedInState = loggedInState => ({
  type: LOG_IN_USER,
  payload: loggedInState
});

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  payload: profile
});

export const setUserFetchingState = status => ({
  type: SET_USER_FETCHING_STATUS,
  payload: status
});

export const setUserReconsentStatus = status => ({
  type: SET_USER_RECONSENT_STATUS,
  payload: status
});

export const setUserPreferences = () => {
  return async (dispatch, getState, { api, identity }) => {
    try {
      const serviceId = "marketing";
      const { regionalStore } = getState();
      const userPreferencesPromise = identity.customer.preferences();
      const systemPreferencesPromise = api.fetchPreferences(
        regionalStore.countryCode,
        regionalStore.defaultLanguage
      );
      const [userPreferences, systemPreferences] = await Promise.all([
        userPreferencesPromise,
        systemPreferencesPromise
      ]);
      const service = systemPreferences.services.find(
        service => service.serviceId == serviceId
      );

      const mergedPreferences = service.preferences.map(systemPreference => {
        const preference = userPreferences.find(
          userPreference =>
            userPreference.preferenceId == systemPreference.preferenceId
        );

        return { ...systemPreference, ...preference };
      });

      service.preferences = mergedPreferences;

      return dispatch({ type: SET_USER_PREFERENCES, payload: service });
    } catch (err) {
      dispatch({
        error: true,
        payload: err,
        type: SET_USER_PREFERENCES
      });

      throw err;
    }
  };
};
