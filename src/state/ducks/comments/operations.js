import {
  commentsFetchError,
  commentsAreLoading,
  commentsFetched,
} from './actions';
import { createRequestInit } from '../../utils';

/**
 * Recover all the comments from a post, given his `id` and the app `hostname`.
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
    .catch(() => dispatch(commentsFetchError({ hasFailed: true })));
};

export {
  fetchComments,
};