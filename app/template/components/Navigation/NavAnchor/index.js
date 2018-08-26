import React from 'react';
import { node } from 'prop-types';
import { navigationPropType } from '../../../state/modules/navigation';
import {
  trackNavOpen,
  getGender,
  ANALYTICS_INTERACTION_CLICK,
  ANALYTICS_POSITION_HEADER,
  ANALYTICS_CONTEXT
} from '../../../../helpers/events';
import { addAnalyticsDataToLink } from '../../../helpers/addAnalyticsDataToLink';

const NavAnchor = (props) => {
  const { item, children, ...restOfProps } = props;
  const { gender, label } = item;

  const handleClick = () => {
    trackNavOpen({
      context: ANALYTICS_CONTEXT.openNav,
      interaction: ANALYTICS_INTERACTION_CLICK,
      elementText: label,
      properties: {
        positionOnPage: ANALYTICS_POSITION_HEADER,
        gender: getGender(gender)
      }
    });
  };

  const isExternal = item.linkType === 'external';

  return (
    <a
      {...restOfProps}
      onClick={handleClick}
      href={addAnalyticsDataToLink(item)}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
    </a>
  );
};

NavAnchor.propTypes = {
  item: navigationPropType.isRequired,
  children: node.isRequired
};

export default NavAnchor;
