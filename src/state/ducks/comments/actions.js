import * as types from "./types";
import { createAction } from '../../utils';

// Action creators

/**
 * Will be dispatched from `addCommentThunk`, which makes an API request to
 * add a comment to a post, after successfully doing it
 */
export const addComment = createAction(types.ADD);
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
 * Will be dispatched from `removeComment`, which makes an API request to remove
 * a comment from a post (set their `delete` flag to `true`), after
 * successfully doing it
 */
export const deleteComment = createAction(types.DELETE);
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
 * Will be dispatched from the `updateScore` thunk, triggered when the user
 * clicks on the buttons to update the `voteScore` of a comment.
 * This make then an API request to update the comment score.
 * params → type ('comment'), id, string 'upVote' or 'downVote'
 */
export const updateCommentVoteScore = createAction(types.UPDATE_VOTE_SCORE);
