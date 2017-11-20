import { connect } from 'react-redux';
import { postsOperations, postsSelectors } from 'state/ducks/posts';
import { PostCardList } from 'views/components';

const mapStateToProps = ({
  posts: {
    posts, isLoading, loadHasFailed, sortingDirection, sortingMethod,
  },
}) => ({
  posts: postsSelectors.getSortedPosts(posts, { sortingDirection, sortingMethod }),
  isLoading,
  loadHasFailed,
});

const mapDispatchToProps = dispatch => (
  {
    fetchPosts: () => dispatch(postsOperations.fetchPosts()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostCardList);
