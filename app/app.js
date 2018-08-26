/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from 'container/MainPage';
import MenPage from 'container/MenPage';
import CustomerCarePage from 'container/CustomerCarePage';
import FashionDiscoveryPage from 'container/FashionDiscoveryPage';
import DeliveryPage from 'container/DeliveryPage';
import AboutPage from 'container/AboutPage';
import DiscoverOurAppsPage from 'container/DiscoverOurAppsPage';
import CategoryPage from 'container/CategoryPage';
import ProductDetailPage from 'container/ProductDetailPage';
import MyAccountPage from 'container/MyAccountPage';


import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/createBrowserHistory';
import 'reset-css/reset.css';

// Import root app

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import 'styles/theme.scss';

import configureStore from './configureStore';

import { Header, Footer } from './client/Root';
import WomenPage from './container/WomenPage/WomenPage';
import BagPage from './container/BagPage/BagPage';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load()
  .then(() => {
    document.body.classList.add('fontLoaded');
  }, () => {
    document.body.classList.remove('fontLoaded');
  });

// Create redux store with history
// const initialState = {};
const initialState = {};

const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    /* <Provider store={store}> */
    /* <LanguageProvider messages={messages}> */
    /* <ConnectedRouter history={history}> */

    <div>
      <Header />
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/men" component={MenPage} />
            <Route exact path="/women" component={WomenPage} />

            <Route path="/women/accessories/cat/" component={CategoryPage} />

            <Route path="/women/activewear/" component={ProductDetailPage} />

            <Route path="/bag" component={BagPage} />
            <Route path="/customer-service/customer-care/help/" component={CustomerCarePage} />
            <Route path="/app/answers/" component={CustomerCarePage} />
            <Route path="/fashion-discovery/" component={FashionDiscoveryPage} />
            <Route path="/customer-service/delivery/" component={DeliveryPage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/discover/our-apps/" component={DiscoverOurAppsPage} />
            <Route path="/my-account" component={MyAccountPage} />

          </div>
        </Provider>
      </Router>
      <Footer />
    </div>

    /* </ConnectedRouter> */
    /* </LanguageProvider> */
    /* </Provider> */,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['container/MainPage'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
