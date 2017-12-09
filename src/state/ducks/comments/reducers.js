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
  loadHasFailed: false,
  sortingMethod: 'voteScore',
  sortingDirection: 'DESC',
};

const commentsReducer = createReducer(initialState)({
  [types.ADDED]: (state, { payload }) => ({
    ...state,
    comments: [...state.comments, ...payload.comment],
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
      if (comment.id !== payload.id) return comment;
      return { ...comment, ...payload };
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
  [types.UPDATE_VOTE_SCORE]: (state, { payload }) => ({
    ...state,
    comments: state.comments.map((comment) => {
      if (payload.id !== comment.id) return comment;
      return { ...comment, voteScore: payload.voteScore };
    }),
  }),
});

export default commentsReducer;
