import * as types from './types';
import { createReducer } from '../../utils';

const initialState = {
  posts: [], // all posts list
  postDetails: {}, // post details (current view is a post details view)
  addHasFailed: false,
  deleteHasFailed: false,
  editHasFailed: false,
  loadHasFailed: false,
  isAdding: false,
  isDeleting: false,
  isEditing: false,
  isLoading: false,
  sortingMethod: 'voteScore',
  sortingDirection: 'DESC',
};

const postsReducer = createReducer(initialState)({
  [types.ADDED]: (state, { payload }) => ({
    ...state,
    posts: [...state.posts, payload.post],
  }),
  [types.ADDING]: (state, { payload }) => ({
    ...state,
    isAdding: payload.isAdding,
  }),
  [types.ADD_ERROR]: (state, { payload }) => ({
    ...state,
    addHasFailed: payload.addHasFailed,
  }),
  [types.CHANGE_SORTING_DIRECTION]: (state, { payload }) => ({
    ...state,
    sortingDirection: payload.sortingDirection,
  }),
  [types.CHANGE_SORTING_METHOD]: (state, { payload }) => ({
    ...state,
    sortingMethod: payload.sortingMethod,
  }),
  [types.DELETED]: (state, { payload }) => ({
    ...state,
    posts: state.posts.map((post) => {
      if (post.id !== payload.id) return post;
      return { ...post, deleted: true };
    }),
  }),
  [types.DELETING]: (state, { payload }) => ({
    ...state,
    isDeleting: payload.isDeleting,
  }),
  [types.DELETE_ERROR]: (state, { payload }) => ({
    ...state,
    deleteHasFailed: payload.deleteHasFailed,
  }),
  [types.EDITED]: (state, { payload }) => ({
    ...state,
    posts: state.posts.map((post) => {
      if (post.id !== payload.id) return post;
      return { ...post, ...payload.post };
    }),
  }),
  [types.EDITING]: (state, { payload }) => ({
    ...state,
    isEditing: payload.isEditing,
  }),
  [types.EDIT_ERROR]: (state, { payload }) => ({
    ...state,
    editHasFailed: payload.editHasFailed,
  }),
  [types.FETCHED]: (state, { payload }) => ({
    ...state,
    posts: payload.posts,
  }),
  [types.FETCH_ERROR]: (state, { payload }) => ({
    ...state,
    loadHasFailed: payload.loadHasFailed,
  }),
  [types.LOADING]: (state, { payload }) => ({
    ...state,
    isLoading: payload.isLoading,
  }),
  [types.UPDATE_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    posts: state.posts.map((post) => {
      if (payload.id !== post.id) return post;
      return { ...post, voteScore: payload.voteScore };
    }),
  }),
});

export default postsReducer;
