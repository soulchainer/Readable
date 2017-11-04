import createAction from '../utils/create-action';

// Action types

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_POST = 'ADD_POST';
export const CHANGE_COMMENTS_SORTING_DIRECTION = 'CHANGE_COMMENTS_SORTING_DIRECTION';
export const CHANGE_COMMENTS_SORTING_METHOD = 'CHANGE_COMMENTS_SORTING_METHOD';
export const CHANGE_POSTS_SORTING_DIRECTION = 'CHANGE_POSTS_SORTING_DIRECTION';
export const CHANGE_POSTS_SORTING_METHOD = 'CHANGE_POSTS_SORTING_METHOD';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_POSTS = 'GET_POSTS';
export const UPDATE_COMMENT_VOTE_SCORE = 'UPDATE_COMMENT_VOTE_SCORE';
export const UPDATE_POST_VOTE_SCORE = 'UPDATE_POST_VOTE_SCORE';

// Action creators

/**
 * Will be dispatched from `addCommentThunk`, which makes an API request to
 * add a comment to a post, after successfully doing it
 */
export const addComment = createAction(ADD_COMMENT);
/**
 * Will be dispatched from `addPostThunk`, which makes an API request to
 * add a new post, after successfully doing it
 */
export const addPost = createAction(ADD_POST);
/**
 * Will be dispatched when the user changes the sorting direction for the
 * comments list.
 */
export const changeCommentsSortingDirection = createAction(CHANGE_COMMENTS_SORTING_DIRECTION);
/**
 * Will be dispatched when the user select another sorting method for the
 * comments list.
 */
export const changeCommentsSortingMethod = createAction(CHANGE_COMMENTS_SORTING_METHOD);
/**
 * Will be dispatched when the user changes the sorting direction for the
 * posts list
 */
export const changePostsSortingDirection = createAction(CHANGE_POSTS_SORTING_DIRECTION);
/**
 * Will be dispatched when the user select another sorting method for the
 * posts list.
 */
export const changePostsSortingMethod = createAction(CHANGE_POSTS_SORTING_METHOD);
/**
 * Will be dispatched from `removeComment`, which makes an API request to remove
 * a comment from a post (set their `delete` flag to `true`), after
 * successfully doing it
 */
export const deleteComment = createAction(DELETE_COMMENT);
/**
 * Will be dispatched from `removePost`, which makes an API request to remove
 * a post (set their `delete` flag to `true`), after successfully doing it
 */
export const deletePost = createAction(DELETE_POST);
/**
 * Will be dispatched from `updateComment`, which makes an API request to update
 * a post comment details, after successfully doing it
 */
export const editComment = createAction(EDIT_COMMENT);
/**
 * Will be dispatched from `updatePost`, which makes an API request to update
 * a post details, after successfully doing it
 */
export const editPost = createAction(EDIT_POST);
/**
 * Will be dispatched from `fetchCategories` thunk, which makes an API request
 * to get all categories available, after getting them all
 */
export const getCategories = createAction(GET_CATEGORIES);
/**
 * Will be dispatched from `fetchCategoryPosts` thunk, which makes an API
 * request to get all posts of the given category name, after getting them all
 */
export const getCategoryPosts = createAction(GET_CATEGORY_POSTS);
/**
 * Will be dispatched from `fetchComments` thunk, which makes an API request
 * to get all comments of the given post id, after getting them all
 */
export const getComments = createAction(GET_COMMENTS);
/**
 * Will be dispatched from `fetchPosts` thunk, which makes an API request to
 * get all posts, after getting them all
 */
export const getPosts = createAction(GET_POSTS);
/**
 * Will be dispatched from the `updateScore` thunk, triggered when the user
 * clicks on the buttons to update the `voteScore` of a comment.
 * This make then an API request to update the comment score.
 * params → type ('comment'), id, string 'upVote' or 'downVote'
 */
export const updateCommentVoteScore = createAction(UPDATE_COMMENT_VOTE_SCORE);
/**
 * Will be dispatched from the `updateScore` thunk, triggered when the user
 * clicks on the buttons to update the `voteScore` of a post.
 * This make then an API request to update the post score.
 * params → type ('post'), id, string 'upVote' or 'downVote'
 */
export const updatePostVoteScore = createAction(UPDATE_POST_VOTE_SCORE);
