import uuidv4 from 'uuid/v4';
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
  updateCommentVoteScoreError,
  updatingCommentVoteScore,
  updatedCommentVoteScore,
} from './actions';
import {
  createRequestInit,
  getTimestamp,
} from '../../utils';

/**
 * Add a comment to a post.
 * @param {Object} params - All the info needed to add the comment to the post.
 * @param {string} params.author - The comment's author.
 * @param {string} params.body - The comment's body.
 * @param {string} params.parentId - The parent post's unique ID.
 */
const addComment = params => (dispatch) => {
  const { hostname } = window.location;
  const url = `//${hostname}:3001/comments`;
  const id = uuidv4();
  const init = {
    method: 'POST',
    body: JSON.stringify({
      id,
      timestamp: getTimestamp(),
      ...params,
    }),
  };

  dispatch(commentAdding({ isAdding: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentAdding({ isAdding: false }));
      return response;
    })
    .then(response => response.json())
    .then(comment => dispatch(commentAdded({ comment })))
    .catch((err) => {
      /* eslint-disable no-console */
      console.group('addComment error');
      console.log('An error occured when trying to add the comment');
      console.error(err);
      console.groupEnd();
      /* eslint-enable no-console */
      dispatch(commentAddError({ addHasFailed: true }));
    });
};

/**
 * Delete a comment.
 * @param {string} id `id` of the comment to be deleted.
 */
const deleteComment = id => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/comments/${id}`;
  const init = { method: 'DELETE' };
  dispatch(commentDeleting({ isDeleting: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentDeleting({ isDeleting: false }));
      return response;
    })
    .then(response => response.json())
    .then(() => dispatch(commentDeleted({ id })))
    .catch(() => dispatch(commentDeleteError({ deleteHasFailed: true })));
};

/**
 * Edit a comment from a post.
 * @param {string} id id of the comment to be edited.
 * @param {string} body The new content for the comment.
 */
const editComment = (id, { body }) => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/comments/${id}`;
  const init = {
    method: 'PUT',
    body: JSON.stringify({
      timestamp: getTimestamp(),
      body,
    }),
  };
  dispatch(commentEditing({ isEditing: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentEditing({ isEditing: false }));
      return response;
    })
    .then(response => response.json())
    .then(comment => dispatch(commentEdited({ comment })))
    .catch(() => dispatch(commentEditError({ editHasFailed: true })));
};

/**
 * Recover all the comments from a post.
 * @param {string} id id of the post whose comments will be recovered.
 */
const fetchComments = id => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/posts/${id}/comments`;
  dispatch(commentsAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(commentsAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then(comments => dispatch(commentsFetched({ comments })))
    .catch(() => dispatch(commentsFetchError({ loadHasFailed: true })));
};

/**
 * Update the voteScore of a comment
 * @param {string} id id of the comment which `voteScore` is going to be updated
 * @param {string} option a string representing the direction of the update:
 * `upVote` or `downVote`
 */
const updateScore = (id, option) => (dispatch) => {
  const { hostname } = window.location;
  const url = `//${hostname}:3001/comments/${id}`;
  const init = {
    method: 'POST',
    body: JSON.stringify({ option }),
  };

  dispatch(updatingCommentVoteScore({ isUpdatingScore: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(updatingCommentVoteScore({ isUpdatingScore: false }));
      return response;
    })
    .then(response => response.json())
    .then(comment => dispatch(updatedCommentVoteScore(comment)))
    .catch((err) => {
      /* eslint-disable no-console */
      console.group('updateScore error');
      console.log('An error occured when trying to update the comment score');
      console.error(err);
      console.groupEnd();
      /* eslint-enable no-console */
      dispatch(updateCommentVoteScoreError({ updateScoreHasFailed: true }));
    });
};

export {
  addComment,
  deleteComment,
  editComment,
  fetchComments,
  updateScore,
};
