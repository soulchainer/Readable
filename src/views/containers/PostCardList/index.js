import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postsOperations, postsSelectors } from 'state/ducks/posts';
import PostCardList from 'views/components/PostCardList';

const {
  getSortedPosts,
  getVisiblePosts,
} = postsSelectors;

const mapStateToProps = ({
  posts: {
    posts, isLoading, loadHasFailed, sortingDirection, sortingMethod,
  },
}) => ({
  posts: getSortedPosts(getVisiblePosts(posts), {
    sortingDirection,
    sortingMethod,
  }),
  isLoading,
  loadHasFailed,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(postsOperations.fetchPosts(category)),
});

const postCardList = connect(mapStateToProps, mapDispatchToProps)(PostCardList);

export default withRouter(postCardList);
