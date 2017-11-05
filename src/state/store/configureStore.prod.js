import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../ducks';

const enhancer = applyMiddleware(thunk);
const rootReducer = combineReducers(reducers);

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  enhancer
);

export default configureStore;
