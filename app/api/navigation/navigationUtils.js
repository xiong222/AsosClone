import {
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  LARGE_VIEWPORT
} from "../../template/state/modules/layout";
import {
  maleLargePrimaryNavigationItems,
  femaleLargePrimaryNavigationItems
} from "../../template/state/modules/navigation";

export const getViewportExclusions = (channelExclusions = []) => {
  const viewportExclusion = [];

  channelExclusions.forEach(exclusion => {
    if (exclusion === "webLarge") {
      viewportExclusion.push(LARGE_VIEWPORT);
    }
    if (exclusion === "webSmall") {
      viewportExclusion.push(SMALL_VIEWPORT);
      viewportExclusion.push(MEDIUM_VIEWPORT);
    }
  });

  return viewportExclusion;
};

const hasItems = tree => {
  const maleExists = maleLargePrimaryNavigationItems({ navigation: { tree } });
  const femaleExists = femaleLargePrimaryNavigationItems({
    navigation: { tree }
  });

  return !!(
    maleExists &&
    femaleExists &&
    (maleExists.length && femaleExists.length)
  );
};

export const validateMappedNavigation = mappedNavigation => {
  return !!(
    mappedNavigation &&
    mappedNavigation.tree &&
    hasItems(mappedNavigation.tree)
  );
};
