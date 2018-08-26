import { applyMiddleware } from 'redux';

import { autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import bagMiddleware from './middleware/bag';
import actionDeferralMiddleware from './middleware/actionDeferral';
import thunk from 'redux-thunk';
import * as api from '../../api';

export default () =>
  composeWithDevTools(
    applyMiddleware(
      actionDeferralMiddleware, // must go first!
      thunk.withExtraArgument({
        api,
        get identity() {
          return window.__sdk.identity;
        }
      }),
      bagMiddleware
    ) // ,
    // autoRehydrate()
  );
