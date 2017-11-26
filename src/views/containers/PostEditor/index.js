import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postsOperations } from 'state/ducks/posts';
import PostEditor from 'views/components/PostEditor';

const mapStateToProps = ({
  posts: {
    addHasFailed,
    editHasFailed,
    isAdding,
    isEditing,
  },
}) => ({
  addHasFailed, editHasFailed, isAdding, isEditing,
});

const mapDispatchToProps = dispatch => ({
  addPost: params => dispatch(postsOperations.addPost(params)),
  editPost: (id, params) => dispatch(postsOperations.editPost(id, params)),
});

const postEditor = connect(mapStateToProps, mapDispatchToProps)(PostEditor);

export default withRouter(postEditor);
