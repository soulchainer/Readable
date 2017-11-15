// TODO: remove when quick operations testing is done
import { connect } from 'react-redux';
import PruebaComp from '../components/PruebaComp';
import { categoriesOperations } from '../../state/ducks/categories';
import { commentsOperations } from '../../state/ducks/comments';

const mapStateToProps = state => ({
  categories: state.categories.categories,
  comments: state.comments.comments,
});

const mapDispatchToProps = dispatch => (
  {
    addComment: (hostname, params) => dispatch(commentsOperations.addComment(hostname, params)),
    deleteComment: (hostname, id) => dispatch(commentsOperations.deleteComment(hostname, id)),
    editComment: (hostname, id, body) => {
      dispatch(commentsOperations.editComment(hostname, id, body));
    },
    fetchCategories: hostname => dispatch(categoriesOperations.fetchCategories(hostname)),
    fetchComments: (hostname, id) => dispatch(commentsOperations.fetchComments(hostname, id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PruebaComp);
