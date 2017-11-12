import * as types from './types';
import { createAction } from '../../utils';

// Action creators

/**
 * All of this actions will be dispatched from `fetchCategories` thunk, which
 * makes an API request to get all categories available in the server
 */

export const categoriesFetchError = createAction(types.FETCH_ERROR);

export const categoriesAreLoading = createAction(types.LOADING);

export const categoriesFetched = createAction(types.FETCHED);
