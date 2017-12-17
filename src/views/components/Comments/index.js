import React from 'react';
import PropTypes from 'prop-types';
import {
  CommentEditor,
  CommentList,
  SortingtHat,
} from 'views/containers';

const Comments = ({ postId }) => (
  <div className="Comments">
    <SortingtHat type="comments" />
    <CommentEditor parentId={postId} />
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
