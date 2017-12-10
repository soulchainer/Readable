import React from 'react';
import PropTypes from 'prop-types';
import {
  EditionControls,
  VoteScore,
} from 'views/components';

const Comment = ({
  comment,
  deleteComment,
  updateScore,
  voteState,
}) => {
  const {
    id,
    body,
    voteScore,
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
      <VoteScore
        updateScore={updateScore}
        score={voteScore}
        voteState={voteState}
      />
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
  updateScore: PropTypes.func.isRequired,
  voteState: PropTypes.shape({
    isUpdatingScore: PropTypes.bool,
    updateScoreHasFailed: PropTypes.bool,
  }).isRequired,
};
