import React from 'react';
import PropTypes from 'prop-types';
import { EditionControls } from 'views/components';

const Comment = ({
  comment,
  deleteComment,
}) => {
  const {
    id,
    body,
  } = comment;

  console.log(`id: ${id} body: ${body}`); // eslint-disable-line

  return (
    <div className="Comment">
      <EditionControls
        onDelete={deleteComment}
        content={comment}
        type="comment"
      />
      {JSON.stringify(comment)}
    </div>
  );
};

export default Comment;

Comment.propTypes = {
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
  deleteComment: PropTypes.func.isRequired,
};
