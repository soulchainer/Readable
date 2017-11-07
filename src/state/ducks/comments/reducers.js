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
  [types.ADD]: (state, { payload }) => ({
    ...state,
    comments: payload,
  }),
  [types.CHANGE_SORTING_DIRECTION]: (state, { payload }) => ({
    ...state,
    sortingDirection: payload,
  }),
  [types.CHANGE_SORTING_METHOD]: (state, { payload }) => ({
    ...state,
    sortingMethod: payload,
  }),
  [types.DELETE]: (state, { payload }) => ({
    ...state,
    comments: state.comments.filter(({ id }) => {
      return id !== payload;
    }),
  }),
  [types.EDIT]: (state, { payload }) => ({
    ...state,
    comments: [
      ...state.comments.filter(({ id }) => comment.id !== id),
      payload,
    ],
  }),
  [types.GET]: (state, { payload }) => ({
    ...state,
    comments: payload,
  }),
  [types.UPDATE_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    comments: state.comments.map((comment) => {
      // if different id, return the same
      // if the same id, update the score accordingly
      return 
    } 
  })
});

export default commentsReducer;