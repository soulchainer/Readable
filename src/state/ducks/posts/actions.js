import * as types from "./types";
import { createAction } from '../../utils';

// Action creators

/**
 * Will be dispatched from `addPostThunk`, which makes an API request to
 * add a new post, after successfully doing it
 */
export const addPost = createAction(ADD);
/**
 * Will be dispatched when the user changes the sorting direction for the
 * posts list
 */
export const changePostsSortingDirection = createAction(CHANGE_SORTING_DIRECTION);
/**
 * Will be dispatched when the user select another sorting method for the
 * posts list.
 */
export const changePostsSortingMethod = createAction(CHANGE_SORTING_METHOD);
/**
 * Will be dispatched from `removePost`, which makes an API request to remove
 * a post (set their `delete` flag to `true`), after successfully doing it
 */
export const deletePost = createAction(DELETE);
/**
 * Will be dispatched from `updatePost`, which makes an API request to update
 * a post details, after successfully doing it
 */
export const editPost = createAction(EDIT);
/**
 * Will be dispatched from `fetchPosts` thunk, which makes an API request to
 * get all posts, after getting them all
 */
export const getPosts = createAction(GET);
/**
 * Will be dispatched from the `updateScore` thunk, triggered when the user
 * clicks on the buttons to update the `voteScore` of a post.
 * This make then an API request to update the post score.
 * params → type ('post'), id, string 'upVote' or 'downVote'
 */
export const updatePostVoteScore = createAction(UPDATE_VOTE_SCORE);
