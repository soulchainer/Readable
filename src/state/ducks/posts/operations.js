import uuidv4 from 'uuid/v4';
import {
  createRequestInit,
  getTimestamp,
} from 'state/utils';
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

  dispatch(postAdding({ isAdding: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postAdding({ isAdding: false }));
      return response;
    })
    .then(response => response.json())
    .then(post => dispatch(postAdded({ post })))
    .catch(() => dispatch(postAddError({ addHasFailed: true })));
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
  dispatch(postDeleting({ isDeleting: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postDeleting({ isDeleting: false }));
      return response;
    })
    .then(response => response.json())
    .then(() => dispatch(postDeleted({ id })))
    .catch(() => dispatch(postDeleteError({ deleteHasFailed: true })));
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
  dispatch(postEditing({ isEditing: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postEditing({ isEditing: false }));
      return response;
    })
    .then(response => response.json())
    .then(post => dispatch(postEdited({ post })))
    .catch(() => dispatch(postEditError({ editHasFailed: true })));
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
  dispatch(postsAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(postsAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then(posts => dispatch(postsFetched({ posts })))
    .catch(() => dispatch(postsFetchError({ loadHasFailed: true })));
};

export {
  addPost,
  deletePost,
  editPost,
  fetchPosts,
};
