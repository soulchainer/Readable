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
    comments: payload.comments,
  }),
  [types.CHANGE_SORTING_DIRECTION]: (state, { payload }) => ({
    ...state,
    sortingDirection: payload.sortingDirection,
  }),
  [types.CHANGE_SORTING_METHOD]: (state, { payload }) => ({
    ...state,
    sortingMethod: payload.sortingMethod,
  }),
  [types.DELETE]: (state, { payload }) => ({
    ...state,
    comments: state.comments.filter(({ id }) => {
      return id !== payload.id;
    }),
  }),
  [types.EDIT]: (state, { payload }) => ({
    ...state,
    comments: state.comments.map((comment) => {
      if (comment.id !== payload.id) return comment;
      return {...coment, ...payload};
    }),
  }),
  [types.GET]: (state, { payload }) => ({
    ...state,
    comments: payload.comments,
  }),
  [types.UPDATE_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    comments: state.comments.map((comment) => {
      if (payload.id !== comment.id) return comment;
      return {...comment, voteScore: payload.voteScore};
    }),
  }),
});

export default commentsReducer;