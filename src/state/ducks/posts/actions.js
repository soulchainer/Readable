import { createAction } from 'state/utils';
import * as types from './types';

// Action creators

/**
 * All of this actions will be dispatched from `addPost`, which makes an API
 * request to add a new post.
 */
export const postAddError = createAction(types.ADD_ERROR);
export const postAdded = createAction(types.ADDED);
export const postAdding = createAction(types.ADDING);
/**
 * Will be dispatched when the user changes the sorting direction for the
 * post list.
 */
export const changePostsSortingDirection = createAction(types.CHANGE_SORTING_DIRECTION);
/**
 * Will be dispatched when the user select another sorting method for the
 * posts list.
 */
export const changePostsSortingMethod = createAction(types.CHANGE_SORTING_METHOD);
/**
 * All of this actions will be dispatched from `deletePost`, which makes an
 * API request to delete a post (set their `deleted` flag and all their child
 * comments `parentDeleted` flags to `true`).
 */
export const postDeleteError = createAction(types.DELETE_ERROR);
export const postDeleted = createAction(types.DELETED);
export const postDeleting = createAction(types.DELETING);
/**
 * All of this actions will be dispatched from `fetchPostDetails` thunk, which
 * makes an API request to get a post details.
 */
export const postDetailsFetchError = createAction(types.FETCH_DETAILS_ERROR);
export const postDetailsAreLoading = createAction(types.DETAILS_LOADING);
export const postDetailsFetched = createAction(types.DETAILS_FETCHED);
/**
 * All of this actions will be dispatched from `editPost`, which makes an API
 * request to edit a post details.
 */
export const postEditError = createAction(types.EDIT_ERROR);
export const postEditing = createAction(types.EDITING);
export const postEdited = createAction(types.EDITED);
/**
 * All of this actions will be dispatched from `fetchPosts` thunk, which makes
 * an API request to get all posts.
 */
export const postsFetchError = createAction(types.FETCH_ERROR);
export const postsAreLoading = createAction(types.LOADING);
export const postsFetched = createAction(types.FETCHED);
/**
 * All of this actions will be dispatched from `updateScore` thunk, which
 * makes an API request to update a post score (`voteScore`), triggered when
 * the user clicks on the voting buttons.
 * params → `id`, `option` (the `upVote` or `downVote` string)
 */
export const updatePostVoteScoreError = createAction(types.UPDATE_VOTE_SCORE_ERROR);
export const updatingPostVoteScore = createAction(types.UPDATING_VOTE_SCORE);
export const updatedPostVoteScore = createAction(types.UPDATED_VOTE_SCORE);
