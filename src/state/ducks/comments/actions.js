import * as types from './types';
import { createAction } from '../../utils';

// Action creators

/**
 * All of this actions will be dispatched from `addComment`, which makes an API
 * request to add a comment to a post
 */
export const commentAddError = createAction(types.ADD_ERROR);
export const commentAdded = createAction(types.ADDED);
export const commentAdding = createAction(types.ADDING);
/**
 * Will be dispatched when the user changes the sorting direction for the
 * comments list.
 */
export const changeCommentsSortingDirection = createAction(types.CHANGE_SORTING_DIRECTION);
/**
 * Will be dispatched when the user select another sorting method for the
 * comments list.
 */
export const changeCommentsSortingMethod = createAction(types.CHANGE_SORTING_METHOD);
/**
 * All of this actions will be dispatched from `deleteComment`, which makes an
 * API request to delete a comment (set their `deleted` flag to `true`)
 */
export const commentDeleteError = createAction(types.DELETE_ERROR);
export const commentDeleted = createAction(types.DELETED);
export const commentDeleting = createAction(types.DELETING);
/**
 * All of this actions will be dispatched from `editComment`, which makes an API
 * request to edit a post comment details
 */
export const commentEditError = createAction(types.EDIT_ERROR);
export const commentEditing = createAction(types.EDITING);
export const commentEdited = createAction(types.EDITED);
/**
 * All of this actions will be dispatched from `fetchComments` thunk, which
 * makes an API request to get all comments from a post
 */
export const commentsFetchError = createAction(types.FETCH_ERROR);
export const commentsAreLoading = createAction(types.LOADING);
export const commentsFetched = createAction(types.FETCHED);
/**
 * All of this actions will be dispatched from `updateScore` thunk, which
 * makes an API request to update a comment score (`voteScore`), triggered when
 * the user clicks on the voting buttons.
 * params → `id`, `option` (the `upVote` or `downVote` string)
 */
export const updateCommentVoteScoreError = createAction(types.UPDATE_VOTE_SCORE_ERROR);
export const updatingCommentVoteScore = createAction(types.UPDATING_VOTE_SCORE);
export const updatedCommentVoteScore = createAction(types.UPDATED_VOTE_SCORE);
