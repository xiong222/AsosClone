import { SET_FEATURES } from "./constants";

export const setFeatures = features => ({
  type: SET_FEATURES,
  payload: features
});

export const setGlobalFeatureName = testName => {
  /* istanbul ignore else */
  if (typeof window !== "undefined") {
    window.mvtTestName = testName;
  }
};
