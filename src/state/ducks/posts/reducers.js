import { createReducer } from 'state/utils';
import * as types from './types';

const initialState = {
  posts: [], // all posts list
  postDetails: {}, // post details (current view is a post details view)
  addHasFailed: false,
  deleteHasFailed: false,
  editHasFailed: false,
  isAdding: false,
  isDeleting: false,
  isEditing: false,
  isLoading: false,
  isLoadingDetails: false,
  isUpdatingScore: false,
  loadDetailsHasFailed: false,
  loadHasFailed: false,
  sortingMethod: 'voteScore',
  sortingDirection: 'DESC',
  updateScoreHasFailed: false,
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
  [types.DETAILS_FETCHED]: (state, { payload }) => ({
    ...state,
    postDetails: payload.postDetails,
  }),
  [types.DETAILS_LOADING]: (state, { payload }) => ({
    ...state,
    isLoadingDetails: payload.isLoadingDetails,
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
  [types.FETCH_DETAILS_ERROR]: (state, { payload }) => ({
    ...state,
    loadDetailsHasFailed: payload.loadDetailsHasFailed,
  }),
  [types.FETCH_ERROR]: (state, { payload }) => ({
    ...state,
    loadHasFailed: payload.loadHasFailed,
  }),
  [types.LOADING]: (state, { payload }) => ({
    ...state,
    isLoading: payload.isLoading,
  }),
  [types.UPDATED_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    posts: state.posts.map((post) => {
      if (post.id !== payload.id) return post;
      return { ...post, voteScore: payload.voteScore };
    }),
    postDetails: { ...state.postDetails, voteScore: payload.voteScore },
  }),
  [types.UPDATING_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    isUpdatingScore: payload.isUpdatingScore,
  }),
  [types.UPDATE_VOTE_SCORE_ERROR]: (state, { payload }) => ({
    ...state,
    updateScoreHasFailed: payload.updateScoreHasFailed,
  }),
});

export default postsReducer;
