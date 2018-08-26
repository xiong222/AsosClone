import { getStoreUrlByStoreCode } from '../modules/asos-site-chrome-store-presentation';
import { getSocialLinks } from '../../i18n/utilities';

import {
  DEFAULT,
  FEMALE,
  MALE,
  SECURE
} from '../template/state/modules/layout/constants';

const FLOORS = [DEFAULT, FEMALE, MALE, SECURE];

export { DEFAULT, FEMALE, MALE, SECURE };

const addTrailingSlash = (str) => `${str}/`;

export const storeUrlsForAllFloors = (storeCode, platform) =>
  FLOORS.reduce(
    (storeUrls, gender) => ({
      ...storeUrls,
      [gender]: addTrailingSlash(
        getStoreUrlByStoreCode({
          storeCode,
          gender,
          isMobile: platform === 'mobile',
          environmentMode: process.env.CLIENT_ENVIRONMENT_MODE
        })
      )
    }),
    {}
  );

export const storeLinksForAllFloors = (storeCode) =>
  FLOORS.reduce(
    (links, floor) => ({
      ...links,
      [floor]: getSocialLinks({ storeCode, floor })
    }),
    {}
  );
