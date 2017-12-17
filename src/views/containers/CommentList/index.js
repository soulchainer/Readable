import { connect } from 'react-redux';
import {
  commentsOperations,
  commentsSelectors,
} from 'state/ducks/comments';
import CommentList from 'views/components/CommentList';

const {
  getSortedComments,
  getVisibleComments,
} = commentsSelectors;

const mapStateToProps = ({
  comments: {
    comments,
    isAdding,
    isDeleting,
    isEditing,
    isLoading,
    loadHasFailed,
    sortingDirection,
    sortingMethod,
  },
}, { postId }) => ({
  comments: getSortedComments(getVisibleComments(comments), {
    sortingDirection,
    sortingMethod,
  }),
  status: {
    isAdding,
    isDeleting,
    isEditing,
    isLoading,
    loadHasFailed,
  },
  postId,
});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(commentsOperations.fetchComments(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
