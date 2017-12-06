import React from 'react';
import PropTypes from 'prop-types';
import {
  // CommentEditor,
  CommentList,
} from 'views/containers';

const Comments = ({ postId }) => (
  <div className='Comments'>
    {/* <CommentEditor /> */}
    <CommentList postId={postId} />
  </div>
);

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default Comments;
