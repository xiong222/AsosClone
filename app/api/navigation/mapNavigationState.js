import { desktopToMobile } from '../../modules/asos-site-chrome-store-presentation';
import { getViewportExclusions } from './navigationUtils';
import get from '../../helpers/get';

export const mapNavigationState = (
  navigation,
  gender,
  labelPath = [],
  platform,
  storeUrl
) =>
  navigation.map((navigationItem) => {
    const label = get(navigationItem, 'content.title');
    const alias = get(navigationItem, 'alias');
    const newLabelPath = [].concat(labelPath, [label]);
    const useGender = gender || alias;
    let link = get(navigationItem, 'link.webUrl');
    const linkType = get(navigationItem, 'link.linkType');
    if (link && platform && storeUrl && platform === 'mobile') {
      link = desktopToMobile(link, storeUrl);
    }

    return {
      id: get(navigationItem, 'id'),
      alias,
      label,
      subtitle: get(navigationItem, 'content.subTitle'),
      link,
      linkType,
      type: get(navigationItem, 'type'),
      labelPath: newLabelPath,
      gender: useGender,
      excludes: getViewportExclusions(navigationItem.channelExclusions),
      largeScreenPriority: get(navigationItem, 'webLargePriority'),
      largeScreenColumnSpan: get(navigationItem, 'display.webLargeColumnSpan'),
      largeScreenTemplateId: get(navigationItem, 'display.webLargeTemplateId'),
      smallAndMediumTemplateId: get(navigationItem, 'display.mobileTemplateId'),
      smallAndMediumLayout: get(navigationItem, 'display.mobileDisplayLayout'),
      smallAndMediumImageUrl: get(navigationItem, 'content.mobileImageUrl'),
      largeScreenImageUrl: get(navigationItem, 'content.webLargeImageUrl'),
      largeScreenStyleType: get(navigationItem, 'style.webLargeStyleType'),
      smallAndMediumStyleType: get(navigationItem, 'style.mobileStyleType'),
      items: mapNavigationState(
        navigationItem.children,
        useGender,
        newLabelPath,
        platform,
        storeUrl
      )
    };
  });
