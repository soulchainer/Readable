import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { withRouter } from 'react-router';
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

const postCardList = connect(mapStateToProps, mapDispatchToProps)(PostCardList);

export default withLastLocation(withRouter(postCardList));
