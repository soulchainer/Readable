import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { commentsOperations } from 'state/ducks/comments';
import { postsOperations } from 'state/ducks/posts';
import EditionControls from 'views/components/EditionControls';

const operations = {
  comments: {
    delete: commentsOperations.deleteComment,
  },
  posts: {
    delete: postsOperations.deletePost,
  },
};

const mapStateToProps = ({
  posts: {
    deleteHasFailed,
    isDeleting,
  },
}, { content, type }) => ({
  content,
  deleteHasFailed,
  isDeleting,
  type,
});

const mapDispatchToProps = (dispatch, { id, type }) => ({
  onDelete: () => dispatch(operations[type].delete(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditionControls));
