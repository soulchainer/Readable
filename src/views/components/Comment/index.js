import React from 'react';
import PropTypes from 'prop-types';
import { EditionControls } from 'views/components';

const Comment = ({ actions, comment }) => {
  const {
    deleteComment,
    editComment,
  } = actions;

  const {
    id,
    body
  } = comment;

  return (
    <div class="Comment">
      <EditionControls
        onEdit={editComment}
        onDelete={deleteComment}
        id={id}
        param={body}
      />
      {JSON.stringify(comment)}
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  comment: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    deleted: PropTypes.bool,
    id: PropTypes.string,
    parentDeleted: PropTypes.bool,
    parentId: PropTypes.string,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
  }).isRequired,
};
