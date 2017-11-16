import * as types from './types';
import { createReducer } from '../../utils';

/* State shape
  {
    posts: [ post ], // all posts list
    // Posts details (of the actual post).
    // Cleared on `componentWillUnmount` (of post details page)
    postDetails: { postDetails },
    addHasFailed: boolean,
    deleteHasFailed: boolean,
    editHasFailed: boolean,
    loadHasFailed: boolean,
    isAdding: boolean,
    isDeleting: boolean,
    isEditing: boolean,
    isLoading: boolean,
    sortingMethod: sortingMethod,
    sortingDirection: sortingDirection
  }
*/

const initialState = {
  posts: [],
  postDetails: {},
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
    ...state, // voy por aquí, tengo que coger todos sus comentarios y
    // marcar su parentDeleted a `true`
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
  [types.EDIT]: (state, { payload }) => ({
    ...state,
    posts: state.posts.map((post) => {
      if (post.id !== payload.id) return post;
      return { ...post, ...payload };
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
  [types.GET_FROM_CATEGORY]: (state, { payload }) => ({
    ...state,
    postsByCurrentCategory: payload.posts,
  }),
  [types.GET]: (state, { payload }) => ({
    ...state,
    posts: payload.posts,
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
