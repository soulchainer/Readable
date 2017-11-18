import * as types from './types';
import { createReducer } from '../../utils';

const initialState = {
  categories: {}, // { name: path }
  loadHasFailed: false,
  isLoading: false,
};

const categoriesReducer = createReducer(initialState)({
  [types.FETCHED]: (state, { payload }) => ({
    ...state,
    categories: payload.categories,
  }),
  [types.FETCH_ERROR]: (state, { payload }) => ({
    ...state,
    hasFailed: payload.loadHasFailed,
  }),
  [types.LOADING]: (state, { payload }) => ({
    ...state,
    isLoading: payload.isLoading,
  }),
});

export default categoriesReducer;
