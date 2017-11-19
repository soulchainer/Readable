// TODO: remove when quick operations testing is done
import { connect } from 'react-redux';
import PruebaComp from '../components/PruebaComp';
import { categoriesOperations } from '../../state/ducks/categories';
import { commentsOperations } from '../../state/ducks/comments';
import { postsOperations } from '../../state/ducks/posts';

const mapStateToProps = state => ({
  categories: state.categories.categories,
  comments: state.comments.comments,
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => (
  {
    addComment: (hostname, params) => dispatch(commentsOperations.addComment(hostname, params)),
    addPost: (hostname, params) => dispatch(postsOperations.addPost(hostname, params)),
    deleteComment: (hostname, id) => dispatch(commentsOperations.deleteComment(hostname, id)),
    deletePost: (hostname, id) => dispatch(postsOperations.deletePost(hostname, id)),
    editComment: (hostname, id, body) => {
      dispatch(commentsOperations.editComment(hostname, id, body));
    },
    editPost: (hostname, id, params) => {
      dispatch(postsOperations.editPost(hostname, id, params));
    },
    fetchCategories: hostname => dispatch(categoriesOperations.fetchCategories(hostname)),
    fetchComments: (hostname, id) => dispatch(commentsOperations.fetchComments(hostname, id)),
    fetchPosts: hostname => dispatch(postsOperations.fetchPosts(hostname)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PruebaComp);
