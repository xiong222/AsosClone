import get from '../../app/helpers/get';

import socialLinks from './socialLinks.json';
import lowerEntries from '../../app/helpers/lowerEntries';

import {
  FEMALE,
  DEFAULT
} from '../../app/template/state/modules/layout/constants';

export const getLanguage = (languageCode) => 'en-US'.split('-')[0];

export const getSocialLinks = (params) => {
  const { floor, storeCode } = lowerEntries(params);

  if (!floor || !storeCode) {
    throw new Error(
      'cannot retrieve social networks without storeCode and floor'
    );
  }

  const defaultedFloor = floor === DEFAULT ? FEMALE : floor;
  const linksPath = `${storeCode}.${defaultedFloor}`;

  return get(socialLinks, linksPath);
};
