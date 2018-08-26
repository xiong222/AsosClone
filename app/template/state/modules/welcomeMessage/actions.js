import { RECEIVE_WELCOME_MESSAGE } from "./constants";

export const requestWelcomeMessage = platform => {
  return (dispatch, getState, { api }) => {
    const { regionalStore } = getState();
    const { keyStoreDataversion, countryCode } = regionalStore;
    const { fetchWelcomeMessage } = api;
    fetchWelcomeMessage(
      countryCode,
      platform,
      keyStoreDataversion
    ).then(res => {
      dispatch({ type: RECEIVE_WELCOME_MESSAGE, payload: res });
    });
  };
};
