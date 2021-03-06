// Action types

/**
 * Dispatched after post were succesfully added on the server
 */
export const ADDED = 'posts/ADDED';
/**
 * Dispatched when an API call to add a post is sent
 */
export const ADDING = 'posts/ADDING';
/**
 * Dispatched when an API call to add post fails
 */
export const ADD_ERROR = 'posts/ADD_ERROR';
export const CHANGE_SORTING_DIRECTION = 'posts/CHANGE_SORTING_DIRECTION';
export const CHANGE_SORTING_METHOD = 'posts/CHANGE_SORTING_METHOD';
/**
 * Dispatched after post were succesfully deleted on the server
 */
export const DELETED = 'posts/DELETED';
/**
 * Dispatched when an API call to delete a post is sent
 */
export const DELETING = 'posts/DELETING';
/**
 * Dispatched when an API call to delete a post fails
 */
export const DELETE_ERROR = 'posts/DELETE_ERROR';
/**
 * Dispatched after a post details were succesfully fetched from the server
 */
export const DETAILS_FETCHED = 'posts/DETAILS_FETCHED';
/**
 * Dispatched when an API call to fetch a post details is sent
 */
export const DETAILS_LOADING = 'posts/DETAILS_LOADING';
/**
 * Dispatched after post were succesfully edited on the server
 */
export const EDITED = 'posts/EDITED';
/**
 * Dispatched when an API call to edit a post is sent
 */
export const EDITING = 'posts/EDITING';
/**
 * Dispatched when an API call to edit a post fails
 */
export const EDIT_ERROR = 'posts/EDIT_ERROR';
/**
 * Dispatched after posts were succesfully fetched from the server
 */
export const FETCHED = 'posts/FETCHED';
/**
 * Dispatched when an API call to fetch a post details fails
 */
export const FETCH_DETAILS_ERROR = 'posts/FETCH_DETAILS_ERROR';
/**
 * Dispatched when an API call to fetch all posts fails
 */
export const FETCH_ERROR = 'posts/FETCH_ERROR';
/**
 * Dispatched when an API call to fetch all posts is sent
 */
export const LOADING = 'posts/LOADING';
/**
 * Dispatched after a post `voteScore` is succesfully updated on the server
 */
export const UPDATED_VOTE_SCORE = 'posts/UPDATED_VOTE_SCORE';
/**
 * Dispatched when an API call to update a post `voteScore` is sent
 */
export const UPDATING_VOTE_SCORE = 'posts/UPDATING_VOTE_SCORE';
/**
 * Dispatched when an API call to update a post `voteScore` fails
 */
export const UPDATE_VOTE_SCORE_ERROR = 'posts/UPDATE_VOTE_SCORE_ERROR';
