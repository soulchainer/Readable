import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
  {
    posts: [ post ], // all posts list
    // Posts details (of the actual post).
    // Cleared on `componentWillUnmount` (of post details page)
    postDetails: { postDetails }
    sortingMethod: sortingMethod,
    sortingDirection: sortingDirection
  }
*/

const initialState = {
  posts: [],
  postDetails: {},
  sortingMethod: 'voteScore',
  sortingDirection: 'DESC',
};

const postsReducer = createReducer(initialState)({
  [types.ADD]: (state, { payload }) => ({
    ...state,
    posts: payload,
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
    posts: state.posts.filter(({ id }) => {
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
    posts: payload,
  }),
  [types.UPDATE_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    posts: state.comments.map((comment) => {
      if (payload.id !== comment.id) return comment;
      return {...comment, voteScore: payload.voteScore};
    }),
  }),
});

export default postsReducer;