import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postsOperations } from 'state/ducks/posts';
import Post from 'views/components/Post';

const mapStateToProps = ({
  posts: {
    postDetails, isLoadingDetails, loadDetailsHasFailed,
  },
}) => ({
  postDetails,
  isLoadingDetails,
  loadDetailsHasFailed,
});

const mapDispatchToProps = dispatch => ({
  fetchPostDetails: id => dispatch(postsOperations.fetchPostDetails(id)),
});

const post = connect(mapStateToProps, mapDispatchToProps)(Post);

export default withRouter(post);
