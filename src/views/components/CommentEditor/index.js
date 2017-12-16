import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      body: '',
      errorMessage: '',
      isDisabledAuthor: false,
      isFormDisabled: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      isAdding,
      isEditing,
    } = this.props;

    const { location: { state: nextState } } = nextProps;

    if (nextState) {
      const { action, content } = nextState;
      const isEdit = action === 'editComment';
      let newState = {};
      if (isEdit) newState.isDisabledAuthor = true;

      if (content) {
        const { author, body } = content;
        newState = { ...newState, author, body };
      }
      this.setState(newState);
    }

    /**
     * TODO: Improve this. Add a loading message, maybe with a spinner,
     * notifying there is an edit/new comment addition in progress.
     */
    const isAddingChanged = isAdding !== nextProps.isAdding;
    const isEditingChanged = isEditing !== nextProps.isEditing;
    const addEnd = isAddingChanged && !nextProps.isAdding;
    const editEnd = isEditingChanged && !nextProps.isEditing;

    if (isAddingChanged || isEditingChanged) {
      this.setState(this.toggleFormDisabled);
    }
    if (isAddingChanged) {
      if (addEnd) {
        if (nextProps.addHasFailed) {
          /* The comment add failed */
          this.setState({
            errorMessage: 'There was an error adding the comment',
          });
        }
        /* The comment was added succesfully */
      }
    } else if (isEditingChanged) {
      if (editEnd) {
        if (nextProps.editHasFailed) {
          /* The comment edit failed */
          this.setState({
            errorMessage: 'There was an error editing the comment',
          });
        }
        /* The comment edit succeded */
      }
    }
  }

  clearData = () => {
    const {
      history,
      location: { pathname },
    } = this.props;

    history.replace(pathname);
    this.setState({
      author: '',
      body: '',
      isDisabledAuthor: false,
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      addComment,
      editComment,
      location: { state },
      parentId,
    } = this.props;

    const {
      author,
      body,
    } = this.state;

    if (state) {
      const { content } = state;
      await editComment(content.id, { body });
    } else {
      await addComment({
        author,
        body,
        parentId,
      });
    }
    this.clearData();
  }

  toggleFormDisabled = prevState => ({
    ...prevState,
    isFormDisabled: !prevState.isFormDisabled,
  });

  render() {
    const {
      errorMessage,
      isDisabledAuthor,
      isFormDisabled,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="author">Author</label>
          <input
            onChange={this.handleChange}
            disabled={isDisabledAuthor || isFormDisabled}
            id="author"
            name="author"
            type="text"
            value={this.state.author}
          />
          <label htmlFor="body">Body</label>
          <textarea
            onChange={this.handleChange}
            disabled={isFormDisabled}
            id="body"
            name="body"
            value={this.state.body}
          />
          <input
            onClick={this.clearData}
            disabled={isFormDisabled}
            name="clear"
            type="reset"
            value="Clear"
          />
          <input
            disabled={isFormDisabled}
            name="submit"
            type="submit"
            value="Submit"
          />
        </form>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
CommentEditor.propTypes = {
  addComment: PropTypes.func.isRequired,
  addHasFailed: PropTypes.bool.isRequired,
  editComment: PropTypes.func.isRequired,
  editHasFailed: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  isAdding: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  parentId: PropTypes.string.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default CommentEditor;
