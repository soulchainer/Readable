import uuidv4 from 'uuid/v4';
import * as actions from './actions';
import {
  createRequestInit,
  getTimestamp,
} from '../../utils';

// Links to simple actions

/**
 * Change the sorting direction for the comment list.
 */
const { changeCommentsSortingDirection } = actions;

/**
 * Change the sorting method for the comment list.
 */
const { changeCommentsSortingMethod } = actions;

// Thunks

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

  dispatch(actions.commentAdding({ isAdding: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.commentAdding({ isAdding: false }));
      return response;
    })
    .then(response => response.json())
    .then(comment => dispatch(actions.commentAdded({ comment })))
    .catch((err) => {
      /* eslint-disable no-console */
      console.group('addComment error');
      console.log('An error occured when trying to add the comment');
      console.error(err);
      console.groupEnd();
      /* eslint-enable no-console */
      dispatch(actions.commentAddError({ addHasFailed: true }));
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
  dispatch(actions.commentDeleting({ isDeleting: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.commentDeleting({ isDeleting: false }));
      return response;
    })
    .then(response => response.json())
    .then(() => dispatch(actions.commentDeleted({ id })))
    .catch(() => dispatch(actions.commentDeleteError({ deleteHasFailed: true })));
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
  dispatch(actions.commentEditing({ isEditing: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.commentEditing({ isEditing: false }));
      return response;
    })
    .then(response => response.json())
    .then(comment => dispatch(actions.commentEdited({ comment })))
    .catch(() => dispatch(actions.commentEditError({ editHasFailed: true })));
};

/**
 * Recover all the comments from a post.
 * @param {string} id id of the post whose comments will be recovered.
 */
const fetchComments = id => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  const url = `//${hostname}:3001/posts/${id}/comments`;
  dispatch(actions.commentsAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.commentsAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then(comments => dispatch(actions.commentsFetched({ comments })))
    .catch(() => dispatch(actions.commentsFetchError({ loadHasFailed: true })));
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

  dispatch(actions.updatingCommentVoteScore({ isUpdatingScore: true }));

  fetch(url, createRequestInit(init))
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(actions.updatingCommentVoteScore({ isUpdatingScore: false }));
      return response;
    })
    .then(response => response.json())
    .then(comment => dispatch(actions.updatedCommentVoteScore(comment)))
    .catch((err) => {
      /* eslint-disable no-console */
      console.group('updateScore error');
      console.log('An error occured when trying to update the comment score');
      console.error(err);
      console.groupEnd();
      /* eslint-enable no-console */
      dispatch(actions.updateCommentVoteScoreError({ updateScoreHasFailed: true }));
    });
};

export {
  addComment,
  changeCommentsSortingDirection,
  changeCommentsSortingMethod,
  deleteComment,
  editComment,
  fetchComments,
  updateScore,
};
