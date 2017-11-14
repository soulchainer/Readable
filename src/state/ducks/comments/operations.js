import {
  commentAddError,
  commentAdded,
  commentAdding,
  commentDeleteError,
  commentDeleting,
  commentDeleted,
  commentEditError,
  commentEditing,
  commentEdited,
  commentsFetchError,
  commentsAreLoading,
  commentsFetched,
} from './actions';
import { createRequestInit } from '../../utils';

/**
 * Add a comment to a post.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {object} params All the info needed to add the comment to the post
 */
const addComment = (hostname, params) => (dispatch) => {
  const url = `//${hostname}:3001/comments`;
  const {
    author,
    body,
    id,
    parentId,
    timestamp,
  } = params;
  const init = {
    
  }
  dispatch(commentAdding({ isAdding: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentsAdding({ isAdding: false }));
      return response;
    })
    .then(response => response.json())
    .then(payload => dispatch(commentAdded(payload)))
    .catch(() => dispatch(commentAddError({ addHasFailed: true })));
};

/**
 * Delete a comment.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {string} id `id` of the comment to be deleted
 */
const deleteComment = (hostname, id) => (dispatch) => {
  const url = `//${hostname}:3001/comments/${id}`;
  const init = { method: 'DELETE' };
  dispatch(commentDeleting({ isDeleting: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentsDeleting({ isDeleting: false }));
      return response;
    })
    .then(response => response.json())
    .then(payload => dispatch(commentDeleted(payload)))
    .catch(() => dispatch(commentDeleteError({ deleteHasFailed: true })));
};

/**
 * Edit a comment from a post.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {string} id id of the comment to be edited
 * @param {number} timestamp Current time at the moment the edit request is sent
 * @param {string} body The new content for the comment
 */
const editComment = (hostname, id, body) => (dispatch) => {
  const url = `//${hostname}:3001/comments/${id}`;
  const init = {
    method: 'PUT',
    body: JSON.stringify({
      timestamp: new Date().getTime(),
      body,
    }),
  };
  dispatch(commentEditing({ isEditing: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentsEditing({ isEditing: false }));
      return response;
    })
    .then(response => response.json())
    .then(response => dispatch(commentEdited(response)))
    .catch(() => dispatch(commentEditError({ editHasFailed: true })));
};

/**
 * Recover all the comments from a post.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {string} id id of the post whose comments will be recovered
 */
const fetchComments = (hostname, id) => (dispatch) => {
  const url = `//${hostname}:3001/posts/${id}/comments`;
  dispatch(commentsAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentsAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then(response => dispatch(commentsFetched(response)))
    .catch(() => dispatch(commentsFetchError({ loadHasFailed: true })));
};

export {
  addComment,
  deleteComment,
  editComment,
  fetchComments,
};