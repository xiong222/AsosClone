/* global requirejs */

const getVersionManifestFeatures = () =>
  window.__versionManifest && window.__versionManifest.features;

const getFeatureManifest = () =>
  window.__featureManifest || {
    features: {},
    mvt: {}
  };

export const initialise = context =>
  new Promise(resolve => {
    /*
    requirejs(["asos-web-features"], ({ default: features }) => {
      const instance = features.getInstance(getFeatureManifest(), context);
      resolve(instance);
    });
    */
    resolve({});
  });

export const addManifestFeatures = instance => {};
//  instance.addManifest({ features: getVersionManifestFeatures() });

