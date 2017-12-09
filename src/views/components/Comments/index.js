import React from 'react';
import PropTypes from 'prop-types';
import {
  CommentEditor,
  CommentList,
} from 'views/containers';

const Comments = ({ postId }) => (
  <div className="Comments">
    <CommentEditor />
    <CommentList postId={postId} />
  </div>
);

Comments.defaultProps = {
  postId: '',
};

Comments.propTypes = {
  postId: PropTypes.string,
};

export default Comments;
