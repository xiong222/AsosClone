import {
  getTemplateVersion,
  getKeyStoreDataversion
} from '../../modules/asos-site-chrome-store-presentation';

import {
  getStoreCode,
  getKeyStoreDataversion as getKeyStoreDataversionFromState
} from '../../template/state/modules/regionalStore';

export const getAllKeyStoreDataversions = (state, manifest) => ({
  inRollback: false, // !manifest.useCurrentKeyStoreDataversion,
  templateValue: getKeyStoreDataversionFromState(state),
  cookieValue: getKeyStoreDataversion(),
  manifestValue: /*manifest.useCurrentKeyStoreDataversion
    ? manifest.keyStoreDataversion.current
    : manifest.keyStoreDataversion.previous*/ 1
});

export const getAllSiteChromeVersions = (state, manifest) => {
  return {
    templateValue: 1,
    cookieValue: 1,
    inRollback: false,
    manifestValue: 1
  };
  /*
  const storeCode = getStoreCode(state).toLowerCase();
  const liveObject = manifest.siteChromeVersion[storeCode];

  return {
    templateValue: state.version,
    cookieValue: getTemplateVersion(storeCode),
    inRollback: !liveObject.useCurrent,
    manifestValue: liveObject.useCurrent
      ? liveObject.current
      : liveObject.previous
  };
  */
};

export const getSiteChromeVersionMappingsFromCookie = (manifest) => {};
/*
  Object.keys(manifest.siteChromeVersion).reduce((mappings, storeCode) => {
    const templateVersion = getTemplateVersion(storeCode);

    if (templateVersion) {
      mappings[storeCode] = templateVersion;
    }

    return mappings;
  }, {});
*/
export const getStoreCodeToSiteChromeVersionMappings = (manifest) => {}; /* {
  const mappingsFromManifestNotInRollback = Object.keys(
    manifest.siteChromeVersion
  ).reduce((mappings, storeCode) => {
    const mapping = manifest.siteChromeVersion[storeCode];

    if (mapping.useCurrent) {
      mappings[storeCode] = mapping.current;
    }

    return mappings;
  }, {});


  const mappingsFromCookie = getSiteChromeVersionMappingsFromCookie(manifest);

  const mappingsFromManifestInRollback = Object.keys(
    manifest.siteChromeVersion
  ).reduce((mappings, storeCode) => {
    const mapping = manifest.siteChromeVersion[storeCode];

    if (!mapping.useCurrent) {
      mappings[storeCode] = mapping.previous;
    }

    return mappings;
  }, {});

  return Object.assign(
    mappingsFromManifestNotInRollback,
    mappingsFromCookie,
    mappingsFromManifestInRollback
  );
};
*/
