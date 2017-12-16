import { connect } from 'react-redux';
import { postsOperations } from 'state/ducks/posts';
import Post from 'views/components/Post';

const mapStateToProps = ({
  posts: {
    isUpdatingScore,
    updateScoreHasFailed,
  },
}) => ({
  voteState: {
    isUpdatingScore,
    updateScoreHasFailed,
  },
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  updateScore: option => dispatch(postsOperations.updateScore(postId, option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
