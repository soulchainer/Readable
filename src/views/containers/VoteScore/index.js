import { connect } from 'react-redux';
import { commentsOperations } from 'state/ducks/comments';
import { postsOperations } from 'state/ducks/posts';
import VoteScore from 'views/components/VoteScore';

const operations = {
  comments: {
    delete: commentsOperations.deleteComment,
    updateScore: commentsOperations.updateScore,
  },
  posts: {
    delete: postsOperations.deletePost,
    updateScore: postsOperations.updateScore,
  },
};

const mapStateToProps = (state, { score, type }) => ({
  score,
  voteState: {
    isUpdatingScore: state[type].isUpdatingScore,
    updateScoreHasFailed: state[type].updateScoreHasFailed,
  },
});

const mapDispatchToProps = (dispatch, { id, type }) => ({
  delete: () => dispatch(operations[type].delete(id)),
  updateScore: option => dispatch(operations[type].updateScore(id, option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteScore);
