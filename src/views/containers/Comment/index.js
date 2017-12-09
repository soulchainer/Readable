import { connect } from 'react-redux';
import { commentsOperations } from 'state/ducks/comments';
import Comment from 'views/components/Comment';

const mapDispatchToProps = (dispatch, { comment }) => ({
  deleteComment: () => dispatch(commentsOperations.deleteComment(comment.id)),
});

export default connect(null, mapDispatchToProps)(Comment);
