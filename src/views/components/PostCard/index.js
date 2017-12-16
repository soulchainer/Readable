import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VoteScore } from 'views/containers';

/* eslint-disable jsx-a11y/anchor-is-valid */
const PostCard = ({
  author,
  body,
  category,
  commentCount,
  id,
  timestamp,
  title,
  voteScore,
}) => (
  <div>
    {`
      author: ${author}
      body: ${body}
      category: ${category}
      commentCount: ${commentCount}
      id: ${id}
      timestamp: ${timestamp}
      title: ${title}
      voteScore: ${voteScore}
    `}
    <VoteScore
      id={id}
      score={voteScore}
      type="posts"
    />
    <Link to={`/${category}/${id}`}>Read More...</Link>
  </div>
);
/* eslint-enable jsx-a11y/anchor-is-valid */

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default PostCard;
