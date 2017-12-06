import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'views/containers';

const CommentList = ({ comments, status }) => {
  const {
    isAdding,
    isDeleting,
    isEditing,
    isLoading,
    loadHasFailed,
  } = status;

  const commentList = comments.map(comment => (
    <Comment
      comment={comment}
      key={comment.id}
    />
  ));

  return commentList;
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropsTypes.object).isRequired,
  status: PropTypes.shape({
    isAdding: PropTypes.bool,
    isDeleting: PropTypes.bool,
    isEditing: PropTypes.bool,
    isLoading: PropTypes.bool,
    loadHasFailed: PropTypes.bool,
  }).isRequired,
};

export default CommentList;