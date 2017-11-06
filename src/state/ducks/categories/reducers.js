import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
[
  {
    name: category_name,
    path: category_path
  }
]
*/

const initialState = [];

const categoriesReducer = createReducer(initialState)({
  [types.GET]: (state, action) => action.payload,
});

export default categoriesReducer;
