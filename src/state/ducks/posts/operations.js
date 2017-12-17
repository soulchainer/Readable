import uuidv4 from 'uuid/v4';
import {
  createRequestInit,
  getTimestamp,
} from 'state/utils';
import * as actions from './actions';

// Links to simple actions

/**
 * Change the sorting direction for the post list.
 */
const { changePostsSortingDirection } = actions;

/**
 * Change the sorting method for the post list.
 */
const { changePostsSortingMethod } = actions;

// Thunks

/**
 * Add a new post.
 * @param {Object} params All the info needed to add the new post.
 * @param {string} params.author The post's author.
 * @param {string} params.body The post's body.
 * @param {string} params.category The post's category.
 * @param {string} params.title The post's title.
 */
const addPost = params => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/posts`;
  const id = uuidv4();
  const init = {
    method: 'POST',
    body: JSON.stringify({
      id,
      timestamp: getTimestamp(),
      ...params,
    }),
  };

  dispatch(actions.postAdding({ isAdding: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.postAdding({ isAdding: false }));
      return response;
    })
    .then(response => response.json())
    .then(post => dispatch(actions.postAdded({ post })))
    .catch(() => dispatch(actions.postAddError({ addHasFailed: true })));
};

/**
 * Delete a post.
 * @param {string} id `id` of the post to be deleted.
 */
const deletePost = id => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/posts/${id}`;
  const init = { method: 'DELETE' };
  dispatch(actions.postDeleting({ isDeleting: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.postDeleting({ isDeleting: false }));
      return response;
    })
    .then(response => response.json())
    .then(() => dispatch(actions.postDeleted({ id })))
    .catch(() => dispatch(actions.postDeleteError({ deleteHasFailed: true })));
};

/**
 * Edit a post.
 * @param {string} id id of the post to be edited.
 * @param {Object} params - All the info to be changed in the post.
 * @param {string} [params.body] - The post's body (optional).
 * @param {string} [params.title] - The post's title (optional).
 */
const editPost = (id, params) => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/posts/${id}`;
  const init = {
    method: 'PUT',
    body: JSON.stringify({
      ...params,
    }),
  };
  dispatch(actions.postEditing({ isEditing: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.postEditing({ isEditing: false }));
      return response;
    })
    .then(response => response.json())
    .then(post => dispatch(actions.postEdited({ post })))
    .catch(() => dispatch(actions.postEditError({ editHasFailed: true })));
};

/**
 * Recover the details of a single post from the server.
 * * @param {string} id `id` of the post which details will be recovered.
 */
const fetchPostDetails = id => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/posts/${id}`;
  dispatch(actions.postDetailsAreLoading({ isLoadingDetails: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.postDetailsAreLoading({ isLoadingDetails: false }));
      return response;
    })
    .then(response => response.json())
    .then(postDetails => dispatch(actions.postDetailsFetched({ postDetails })))
    .catch(() => dispatch(actions.postDetailsFetchError({ loadDetailsHasFailed: true })));
};

/**
 * Recover all the posts from the server.
 * * @param {string} [category] If given, only recover posts from this category.
 */
const fetchPosts = category => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const categoryPathChunk = category ? `${category}/` : '';
  const url = `//${hostname}:3001/${categoryPathChunk}posts`;
  dispatch(actions.postsAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.postsAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then(posts => dispatch(actions.postsFetched({ posts })))
    .catch(() => dispatch(actions.postsFetchError({ loadHasFailed: true })));
};

/**
 * Update the voteScore of a post
 * @param {string} id id of the post which `voteScore` is going to be updated
 * @param {string} option a string representing the direction of the update:
 * `upVote` or `downVote`
 */
const updateScore = (id, option) => (dispatch) => {
  const { hostname } = window.location;
  const url = `//${hostname}:3001/posts/${id}`;
  const init = {
    method: 'POST',
    body: JSON.stringify({ option }),
  };

  dispatch(actions.updatingPostVoteScore({ isUpdatingScore: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.updatingPostVoteScore({ isUpdatingScore: false }));
      return response;
    })
    .then(response => response.json())
    .then(post => dispatch(actions.updatedPostVoteScore(post)))
    .catch((err) => {
      /* eslint-disable no-console */
      console.group('updateScore error');
      console.log('An error occured when trying to update the post score');
      console.error(err);
      console.groupEnd();
      /* eslint-enable no-console */
      dispatch(actions.updatePostVoteScoreError({ updateScoreHasFailed: true }));
    });
};

export {
  addPost,
  changePostsSortingDirection,
  changePostsSortingMethod,
  deletePost,
  editPost,
  fetchPostDetails,
  fetchPosts,
  updateScore,
};
