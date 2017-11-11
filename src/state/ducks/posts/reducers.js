import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
  {
    posts: [ post ], // all posts list
    postsByCurrentCategory: [ categoryPost ], // all posts according to current
    category
    // Posts details (of the actual post).
    // Cleared on `componentWillUnmount` (of post details page)
    postDetails: { postDetails }
    sortingMethod: sortingMethod,
    sortingDirection: sortingDirection
  }
*/

const initialState = {
  posts: [],
  postsByCurrentCategory: [],
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
    posts: [
      ...state.posts.filter(({ id }) => id !== payload.id),
      payload,
    ],
  }),
  [types.GET_FROM_CATEGORY]: (state, { payload }) => ({
    ...state,
    postsByCurrentCategory: payload,
  }),
  [types.GET]: (state, { payload }) => ({
    ...state,
    posts: payload,
  }),
  [types.UPDATE_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    posts: state.posts.map((post) => {
      if (payload.id !== post.id) return post;
      return {...post, voteScore: payload.voteScore};
    }),
  }),
});

export default postsReducer;