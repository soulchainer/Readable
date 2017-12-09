import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'views/containers';

class CommentList extends Component {
  componentDidMount() {
    const { fetchComments, postId } = this.props;
    if (postId) fetchComments(postId);
  }

  componentWillReceiveProps({ postId }) {
    const {
      fetchComments,
      postId: oldPostId,
    } = this.props;
    if (postId !== oldPostId) {
      fetchComments(postId);
    }
  }

  render() {
    const {
      comments,
      status: {
        isAdding,
        isDeleting,
        isEditing,
        isLoading,
        loadHasFailed,
      },
    } = this.props;

    // eslint-disable-next-line
    console.log(`
    isAdding: ${isAdding} isDeleting: ${isDeleting}
    isEditing: ${isEditing} isLoading: ${isLoading}
    loadHasFailed: ${loadHasFailed}
    `);

    const commentList = comments.map(comment => (
      <Comment
        comment={comment}
        key={comment.id}
      />
    ));

    return commentList;
  }
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchComments: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  status: PropTypes.shape({
    isAdding: PropTypes.bool,
    isDeleting: PropTypes.bool,
    isEditing: PropTypes.bool,
    isLoading: PropTypes.bool,
    loadHasFailed: PropTypes.bool,
  }).isRequired,
};

export default CommentList;
