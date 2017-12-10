import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { commentsOperations } from 'state/ducks/comments';
import CommentEditor from 'views/components/CommentEditor';

const mapStateToProps = ({
  comments: {
    addHasFailed,
    editHasFailed,
    isAdding,
    isEditing,
  },
}, { parentId }) => ({
  addHasFailed,
  editHasFailed,
  isAdding,
  isEditing,
  parentId,
});

const mapDispatchToProps = dispatch => ({
  addComment: params => dispatch(commentsOperations.addComment(params)),
  editComment: (id, params) => dispatch(commentsOperations.editComment(id, params)),
});

const commentEditor =
  connect(mapStateToProps, mapDispatchToProps)(CommentEditor);
export default withRouter(commentEditor);
