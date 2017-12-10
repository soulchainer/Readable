import * as types from './types';
import { createReducer } from '../../utils';

const initialState = {
  comments: [], // Current post comments (current view is a post details view)
  addHasFailed: false,
  deleteHasFailed: false,
  editHasFailed: false,
  isAdding: false,
  isDeleting: false,
  isEditing: false,
  isLoading: false,
  isUpdatingScore: false,
  loadHasFailed: false,
  sortingMethod: 'voteScore',
  sortingDirection: 'DESC',
  updateScoreHasFailed: false,
};

const commentsReducer = createReducer(initialState)({
  [types.ADDED]: (state, { payload }) => ({
    ...state,
    comments: [...state.comments, payload.comment],
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
    comments: state.comments.map((comment) => {
      if (comment.id !== payload.id) return comment;
      return { ...comment, deleted: true };
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
    comments: state.comments.map((comment) => {
      if (comment.id !== payload.comment.id) return comment;
      return { ...comment, ...payload.comment };
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
    comments: payload.comments,
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
    comments: state.comments.map((comment) => {
      if (comment.id !== payload.id) return comment;
      return { ...comment, voteScore: payload.voteScore };
    }),
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

export default commentsReducer;
