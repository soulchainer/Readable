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
      <div className="CommentEditor">
        <form
          onSubmit={this.handleSubmit}
          className="CommentEditor-form"
        >
          <label htmlFor="author">Author</label>
          <input
            onChange={this.handleChange}
            className="CommentEditor-form-item"
            disabled={isDisabledAuthor || isFormDisabled}
            id="author"
            name="author"
            type="text"
            value={this.state.author}
          />
          <label htmlFor="body">Body</label>
          <textarea
            onChange={this.handleChange}
            className="CommentEditor-form-item"
            disabled={isFormDisabled}
            id="body"
            name="body"
            value={this.state.body}
          />
          <div className="CommentEditor-buttons">
            <input
              onClick={this.clearData}
              className="CommentEditor-button CommentEditor-button--reset"
              disabled={isFormDisabled}
              name="clear"
              type="reset"
              value="Clear"
            />
            <input
              className="CommentEditor-button CommentEditor-button--submit"
              disabled={isFormDisabled}
              name="submit"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <span>{errorMessage}</span>
        <style jsx>
          {`
            label {
              margin-bottom: 0.2rem;
            }

            textarea {
              max-width: 100%;
              resize: vertical;
            }

            .CommentEditor,
            .CommentEditor-form {
              display: flex;
              flex-direction: column;
              margin-bottom: 1rem;
            }

            .CommentEditor-form-item {
              margin-bottom: 0.5rem;
            }

            .CommentEditor-buttons {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }

            .CommentEditor-button {
              color: #fff;
              cursor: pointer;
              font-weight: 700;
              letter-spacing: 2px;
              margin: 0.5rem;
              max-width: 100%;
              padding: 0.5rem;
              width: 125px;
            }

            .CommentEditor-button--reset {
              background-color: #ec7a19;
            }

            .CommentEditor-button--reset:active,
            .CommentEditor-button--reset:focus,
            .CommentEditor-button--reset:hover {
              box-shadow: .2rem .2rem 0 #c76715;
            }

            .CommentEditor-button--submit {
              background-color: #1ba949;
            }

            .CommentEditor-button--submit:active,
            .CommentEditor-button--submit:focus,
            .CommentEditor-button--submit:hover {
              box-shadow: .2rem .2rem 0 #0c4a20;
            }
          `}
        </style>
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
