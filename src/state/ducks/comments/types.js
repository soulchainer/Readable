// Action types

/**
 * Dispatched after comment were succesfully added on the server
 */
export const ADDED = 'comments/ADDED';
/**
 * Dispatched when an API call to add a comment to a post is sent
 */
export const ADDING = 'comments/ADDING';
/**
 * Dispatched when an API call to add a comment to a post fails
 */
export const ADD_ERROR = 'comments/ADD_ERROR';
export const CHANGE_SORTING_DIRECTION = 'comments/CHANGE_SORTING_DIRECTION';
export const CHANGE_SORTING_METHOD = 'comments/CHANGE_SORTING_METHOD';
/**
 * Dispatched after comment were succesfully deleted on the server
 */
export const DELETED = 'comments/DELETED';
/**
 * Dispatched when an API call to delete a comment is sent
 */
export const DELETING = 'comments/DELETING';
/**
 * Dispatched when an API call to delete a comment fails
 */
export const DELETE_ERROR = 'comments/DELETE_ERROR';
/**
 * Dispatched after comment were succesfully edited on the server
 */
export const EDITED = 'comments/EDITED';
/**
 * Dispatched when an API call to edit a comment from a post is sent
 */
export const EDITING = 'comments/EDITING';
/**
 * Dispatched when an API call to edit a comment from a post fails
 */
export const EDIT_ERROR = 'comments/EDIT_ERROR';
/**
 * Dispatched after comments were succesfully fetched from the server
 */
export const FETCHED = 'comments/FETCHED';
/**
 * Dispatched when an API call to fetch all comments from a post fails
 */
export const FETCH_ERROR = 'comments/FETCH_ERROR';
/**
 * Dispatched when an API call to fetch all comments from a post is sent
 */
export const LOADING = 'comments/LOADING';
export const UPDATE_VOTE_SCORE = 'comments/UPDATE_VOTE_SCORE';
