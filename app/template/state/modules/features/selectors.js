import { createSelector } from "reselect";
import {DEFAULT_STATE} from "../constants";

const getFeaturesStore = state => {
  // state = DEFAULT_STATE;
  return state.features
};

const getMvt = createSelector(getFeaturesStore, feature => feature.mvt);

const getFeatures = createSelector(
  getFeaturesStore,
  feature => feature.features
);

const getFlatFeaturesStore = state => {
  // state = DEFAULT_STATE;
  return {
    ...getFeatures(state),
    ...getMvt(state)
  };
};

export const getFeature = (state, key) => getFlatFeaturesStore(state)[key];

export const isFeatureActive = (state, key) => {
  const features = getFlatFeaturesStore(state);
  const feature = key in features ? features[key] : false;

  return feature && feature !== {};
};

export const getFeaturesLoaded = createSelector(
  getFeaturesStore,
  feature => feature.loadComplete
);

