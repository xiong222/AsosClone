import { createStore } from 'redux';
import enhancers from './enhancers';
import reducer from './modules';

const composedEnhancers = enhancers();

export default (preloadedState) =>
  createStore(reducer, preloadedState, composedEnhancers);

