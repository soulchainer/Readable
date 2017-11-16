import uuidv4 from 'uuid/v4';
import {
  postAddError,
  postAdded,
  postAdding,
  postDeleteError,
  postDeleting,
  postDeleted,
  postEditError,
  postEditing,
  postEdited,
  postsFetchError,
  postsAreLoading,
  postsFetched,
} from './actions';
import {
  createRequestInit,
  getTimestamp,
} from '../../utils';

/**
 * Add a new post.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {object} params All the info needed to add the new post
 */
const addPost = (hostname, params) => (dispatch) => {
  const url = `//${hostname}:3001/posts`;
  const {
    author,
    body,
    parentId,
  } = params;
  const id = uuidv4();
  const init = {
    method: 'POST',
    body: JSON.stringify({
      author,
      body,
      id,
      parentId,
      timestamp: getTimestamp(),
    }),
  };

  dispatch(postAdding({ isAdding: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postAdding({ isAdding: false }));
      return response;
    })
    .then(response => response.json())
    .then(payload => dispatch(postAdded(payload)))
    .catch(() => dispatch(postAddError({ addHasFailed: true })));
};

/**
 * Delete a post.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {string} id `id` of the post to be deleted
 */
const deletePostt = (hostname, id) => (dispatch) => {
  const url = `//${hostname}:3001/posts/${id}`;
  const init = { method: 'DELETE' };
  dispatch(postDeleting({ isDeleting: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postDeleting({ isDeleting: false }));
      return response;
    })
    .then(response => response.json())
    .then(payload => dispatch(posttDeleted(payload)))
    .catch(() => dispatch(postDeleteError({ deleteHasFailed: true })));
};

/**
 * Edit a post.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {string} id id of the post to be edited
 * @param {number} timestamp Current time at the moment the edit request is sent
 * @param {string} body The new content for the post
 */
const editPost = (hostname, id, body) => (dispatch) => {
  const url = `//${hostname}:3001/posts/${id}`;
  const init = {
    method: 'PUT',
    body: JSON.stringify({
      timestamp: getTimestamp(),
      body,
    }),
  };
  dispatch(postEditing({ isEditing: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postEditing({ isEditing: false }));
      return response;
    })
    .then(response => response.json())
    .then(response => dispatch(postEdited(response)))
    .catch(() => dispatch(postEditError({ editHasFailed: true })));
};

/**
 * Recover all the posts from the server.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 */
const fetchPosts = (hostname) => (dispatch) => {
  const url = `//${hostname}:3001/posts`;
  dispatch(postsAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postsAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then(comments => dispatch(postsFetched({ posts })))
    .catch(() => dispatch(postsFetchError({ loadHasFailed: true })));
};

export {
  addPost,
  deletePost,
  editPost,
  fetchPosts,
};
