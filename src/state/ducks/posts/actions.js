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







import * as types from './types';
import { createAction } from '../../utils';

// Action creators

/**
 * All of this actions will be dispatched from `addPost`, which makes an API
 * request to add a new post
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
 * comments `parentDeleted` flags to `true`)
 */
export const postDeleteError = createAction(types.DELETE_ERROR);
export const postDeleted = createAction(types.DELETED);
export const postDeleting = createAction(types.DELETING);
/**
 * All of this actions will be dispatched from `editPost`, which makes an API
 * request to edit a post details
 */
export const postEditError = createAction(types.EDIT_ERROR);
export const postEditing = createAction(types.EDITING);
export const postEdited = createAction(types.EDITED);
/**
 * All of this actions will be dispatched from `fetchPosts` thunk, which makes
 * an API request to get all posts
 */
export const postsFetchError = createAction(types.FETCH_ERROR);
export const postsAreLoading = createAction(types.LOADING);
export const postsFetched = createAction(types.FETCHED);
/**
 * Will be dispatched from the `updateScore` thunk, triggered when the user
 * clicks on the buttons to update the `voteScore` of a post.
 * This make then an API request to update the post score.
 * params → type ('post'), id, string 'upVote' or 'downVote'
 */
export const updatePostVoteScore = createAction(types.UPDATE_VOTE_SCORE);
