import { connect } from 'react-redux';
import {
  commentsConstants,
  commentsOperations,
} from 'state/ducks/comments';
import {
  postsConstants,
  postsOperations,
} from 'state/ducks/posts';
import SortingtHat from 'views/components/SortingtHat';

const ops = {
  changeSortingDirection: {
    comments: commentsOperations.changeCommentsSortingDirection,
    posts: postsOperations.changePostsSortingDirection,
  },
  changeSortingMethod: {
    comments: commentsOperations.changeCommentsSortingMethod,
    posts: postsOperations.changePostsSortingMethod,
  },
};

const sortingDirections = ['ASC', 'DESC'];

const sortingMethods = {
  comments: commentsConstants.sortingMethods,
  posts: postsConstants.sortingMethods,
};

const mapStateToProps = (state, { type }) => ({
  sortingDirection: state[type].sortingDirection,
  sortingDirections,
  sortingMethod: state[type].sortingMethod,
  sortingMethods: sortingMethods[type],
});

const mapDispatchToProps = (dispatch, { type }) => ({
  changeSortingDirection: direction => (
    dispatch(ops.changeSortingDirection[type](direction))
  ),
  changeSortingMethod: method => (
    dispatch(ops.changeSortingMethod[type](method))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingtHat);
