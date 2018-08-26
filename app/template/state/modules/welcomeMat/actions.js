import { RECEIVE_WELCOME_MAT } from "./constants";

export const requestWelcomeMat = platform => {
  return (dispatch, getState, { api }) => {
    const { regionalStore } = getState();
    const { keyStoreDataversion, countryCode } = regionalStore;
    const { fetchWelcomeMat } = api;
    fetchWelcomeMat(countryCode, platform, keyStoreDataversion).then(res => {
      dispatch({ type: RECEIVE_WELCOME_MAT, payload: res });
    });
  };
};
