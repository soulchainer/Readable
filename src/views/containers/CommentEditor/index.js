import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { commentsOperations } from 'state/ducks/comments';
import CommentEditor from 'views/components/CommentEditor';
/**
 * TODO: Add props of add/edit state and edit the component to do give some
 * visual feedback according to them. Maybe add some future animation?
 */
const mapDispatchToProps = dispatch => ({
  addComment: params => dispatch(commentsOperations.addComment(params)),
  editComment: (id, params) => dispatch(commentsOperations.editComment(id, params)),
});

const commentEditor = connect(null, mapDispatchToProps)(CommentEditor);
export default withRouter(commentEditor);
