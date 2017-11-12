import * as types from './types';
import { createReducer } from '../../utils';

/* State shape
{
  categories: [ { name: category_name, path: category_path } ],
  hasFailed: boolean, // categories fetching failed
  isLoading: boolean // categories are being fetched from the server
}

*/

const initialState = {
  categories: [],
  hasFailed: false,
  isLoading: false,
};

const categoriesReducer = createReducer(initialState)({
  [types.FETCHED]: (state, { payload }) => ({
    ...state,
    categories: payload.categories,
  }),
  [types.FETCH_ERROR]: (state, { payload }) => ({
    ...state,
    hasFailed: payload.hasFailed,
  }),
  [types.LOADING]: (state, { payload }) => ({
    ...state,
    isLoading: payload.isLoading,
  }),
});

export default categoriesReducer;
