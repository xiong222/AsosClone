import { SET_FEATURES } from "./constants";

export { setFeatures, setGlobalFeatureName } from "./actions";

export { getFeature, isFeatureActive, getFeaturesLoaded } from "./selectors";

const initialState = {
  features: {},
  mvt: {},
  loadComplete: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEATURES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
