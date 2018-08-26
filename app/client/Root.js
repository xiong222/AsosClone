import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import emitter from '../helpers/events';
// import { isFirstVisit } from "asos-site-chrome-store-presentation";
import HtmlHeader from '../template/components/HtmlHeader';
import FooterComponent from '../template/components/Footer';
import WelcomeWrapperComponent from '../template/components/WelcomeWrapper';
import {
  LARGE_VIEWPORT,
  MEDIUM_VIEWPORT,
  openCookieMessage
} from '../template/state/modules/layout';

import configureStore from '../template/state';
import {
  siteChromeInitialStore,
  siteChromeTokenValues,
  siteChromePublicWindowApi
} from '../template/constants';
import '../template/styles/fonts.css';
import '../template/styles/global.css';
import '../template/components/Breadcrumbs/index.css';
import loadTokenBlock from '../helpers/loadTokenBlock';
import context from './context';
import { reloadNavigation } from './navigation';
import { initialise as initialiseSdk } from './sdk';
import clientConfig from '../template/clientConfig';
import loadUserProfile from './loadUserProfile';
import addFeaturesToStore from './addFeaturesToStore';

const { NAVIGATION_SUBTREE_API_PATH } = clientConfig.get();
const firstVisit = true; // isFirstVisit();
const store = configureStore(window[siteChromeInitialStore]);
const { context: contextFns, updateRegionalStore } = context(store);

window.analyticsEventEmitter = emitter;

window.__sdk = {};

window[siteChromePublicWindowApi] = {
  context: contextFns
};

const updateFeatures = addFeaturesToStore(store, emitter);

emitter.addListener('features-sdk-ready', () =>
  updateFeatures('features-sdk-ready')
);
emitter.addListener('features-mvt-ready', () =>
  updateFeatures('features-mvt-ready')
);

initialiseSdk(store, contextFns);

export const updateStateWithClientData = () => {
  updateRegionalStore();
  loadUserProfile(store);

  loadTokenBlock({
    store,
    initialState: window[siteChromeInitialStore],
    newState: window[siteChromeTokenValues]
  });

  if (firstVisit) {
    store.dispatch(openCookieMessage());
  }

  if (!NAVIGATION_SUBTREE_API_PATH.includes('/preview/')) {
    reloadNavigation(store);
  }

  persistStore(store, {
    keyPrefix: 'chrome:',
    whitelist: ['search']
  });
};

export const Header = () => (
  <Provider store={store}>
    <HtmlHeader />
  </Provider>
);

export const Footer = () => (
  <Provider store={store}>
    <FooterComponent viewable={[LARGE_VIEWPORT, MEDIUM_VIEWPORT]} />
  </Provider>
);

export const WelcomeWrapper =
  /* istanbul ignore next */
  () => (
    <Provider store={store}>
      <WelcomeWrapperComponent />
    </Provider>
  );
