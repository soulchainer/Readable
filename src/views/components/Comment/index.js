import React from 'react';
import PropTypes from 'prop-types';
import {
  EditionControls,
  VoteScore,
} from 'views/containers';

const Comment = ({ comment }) => {
  const {
    id,
    body,
    voteScore,
  } = comment;

  console.log(`id: ${id} body: ${body}`); // eslint-disable-line

  return (
    <div className="Comment">
      <EditionControls
        content={comment}
        id={id}
        type="comments"
      />
      {JSON.stringify(comment)}
      <VoteScore
        id={id}
        score={voteScore}
        type="comments"
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
};
