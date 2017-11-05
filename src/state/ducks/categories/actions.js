import * as types from "./types";
import { createAction } from '../../utils';

// Action creators

/**
 * Will be dispatched from `fetchCategories` thunk, which makes an API request
 * to get all categories available, after getting them all
 */
export const getCategories = createAction(types.GET);
