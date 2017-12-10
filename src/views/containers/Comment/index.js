import { connect } from 'react-redux';
import { commentsOperations } from 'state/ducks/comments';
import Comment from 'views/components/Comment';

const mapStateToProps = ({
  comments: {
    isUpdatingScore,
    updateScoreHasFailed,
  },
}) => ({
  voteState: {
    isUpdatingScore,
    updateScoreHasFailed,
  },
});

const mapDispatchToProps = (dispatch, { comment }) => ({
  deleteComment: () => dispatch(commentsOperations.deleteComment(comment.id)),
  updateScore: option => dispatch(commentsOperations.updateScore(comment.id, option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
