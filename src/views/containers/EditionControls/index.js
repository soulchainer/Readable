import { connect } from 'react-redux';
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

const mapStateToProps = (state, { content, type }) => ({ content, type });

const mapDispatchToProps = (dispatch, { id, type }) => ({
  onDelete: () => dispatch(operations[type].delete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditionControls);
