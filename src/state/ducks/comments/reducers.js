import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
  {
    comments: [ comment ], // all current post comments (if we're on one)
    sortingMethod: sortingMethod,
    sortingDirection: sortingDirection
  }
*/

const initialState = {
  comments: [],
  sortingMethod: 'voteScore',
  sortingDirection: 'DESC',
};

const commentsReducer = createReducer(initialState)({
  [types.ADD]: (state, action) => ({
    ...initialState,
    comments: action.payload,
  }),
  [types.CHANGE_SORTING_DIRECTION]: (state, action) => ({
    ...initialState,
    sortingDirection: action.payload,
  }),
  [types.CHANGE_SORTING_METHOD]: (state, action) => ({
    ...initialState,
    sortingMethod: action.payload,
  }),
  [types.DELETE]: (state, action) => ({
    ...initialState,
    comments: initialState.comment.filter((comment) => {
      return comment.id !== action.payload;
    }),
  }),
});

export default commentsReducer;