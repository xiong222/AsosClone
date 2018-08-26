import React from 'react';
import LargePrimaryNavigation from '../LargePrimaryNavigation';
import { LARGE_VIEWPORT, FEMALE, MALE } from '../../../state/modules/layout';

const LargeNavigation = () => (
  <div>
    <LargePrimaryNavigation forGender={FEMALE} viewable={[LARGE_VIEWPORT]} />
    <LargePrimaryNavigation forGender={MALE} viewable={[LARGE_VIEWPORT]} />
  </div>
);

export default LargeNavigation;
