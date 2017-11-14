import {
  commentEditError,
  commentEditing,
  commentEdited,
  commentsFetchError,
  commentsAreLoading,
  commentsFetched,
} from './actions';
import { createRequestInit } from '../../utils';

/**
 * Edit a comment from a post.
 * @param {string} hostname Hostname of the app, `window.location.hostname`
 * @param {string} id id of the comment to be edited
 * @param {number} timestamp Current time at the moment the edit request is sent
 * @param {string} body The new content for the comment
 */
const editComment = (hostname, id) => (dispatch) => {
  const url = `//${hostname}:3001/comments/${id}`;
  dispatch(commentEditing({ isEditing: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentsEditing({ isEditing: false }));
      return response;
    })
    .then(response => response.json())
    .then(payload => dispatch(commentEdited(payload)))
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
    .then(payload => dispatch(commentsFetched(payload)))
    .catch(() => dispatch(commentsFetchError({ loadHasFailed: true })));
};

export {
  editComment,
  fetchComments,
};