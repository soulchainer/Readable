import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from '../ducks';
import DevTools from '../../views/containers/DevTools';

function getDebugSessionKey() {
  /**
   * By default, tries to read the key from ?debug_session=<key> in the
   * address bar
   */
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length) ? matches[1] : null;
}

const enhancer = compose(
  applyMiddleware(thunk),
  // Enable Redux DevTools
  DevTools.instrument(),
  // Optional. To persist debug sessions
  persistState(getDebugSessionKey()),
);

const rootReducer = combineReducers(reducers);

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(reducers, () => store.replaceReducer(reducers));
  }

  return store;
};

export default configureStore;
