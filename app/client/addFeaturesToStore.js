/*

Add features to store, waiting until DOM content has loaded to avoid template mismatches.

*/

import { setFeatures } from "../template/state/modules/features";

export default (store, emitter) => {
  const dispatchFeatures = event =>
    store.dispatch(
      setFeatures({
        loadComplete: event === "features-mvt-ready",
        ...window.__sdk.features.getFeatures()
      })
    );

  let postHydrate = false;
  let calledBeforeHydrate = false;
  const pendingCalls = [];

  emitter.addListener("hydrate-ready", () => {
    postHydrate = true;
    if (calledBeforeHydrate && pendingCalls.length) {
      pendingCalls.forEach(fn => fn());
    }
  });

  return event => {
    if (postHydrate) {
      dispatchFeatures(event);
    } else {
      calledBeforeHydrate = true;
      pendingCalls.push(() => dispatchFeatures(event));
    }
  };
};

