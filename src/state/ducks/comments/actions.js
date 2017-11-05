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
 * Will be dispatched from `updateComment`, which makes an API request to update
 * a post comment details, after successfully doing it
 */
export const editComment = createAction(types.EDIT);
/**
 * Will be dispatched from `fetchComments` thunk, which makes an API request
 * to get all comments of the given post id, after getting them all
 */
export const getComments = createAction(types.GET);
/**
 * Will be dispatched from the `updateScore` thunk, triggered when the user
 * clicks on the buttons to update the `voteScore` of a comment.
 * This make then an API request to update the comment score.
 * params → type ('comment'), id, string 'upVote' or 'downVote'
 */
export const updateCommentVoteScore = createAction(types.UPDATE_VOTE_SCORE);
