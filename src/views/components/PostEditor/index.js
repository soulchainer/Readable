import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostEditor extends Component {
  constructor(props) {
    super(props);
    /**
     * Disable the proper inputs depending of the current action of the user
     * (adding or editing a post).
     */
    const {
      location: { state: { action } },
      match: { params: { category: categoryPage } },
    } = this.props;
    const isEdit = action === 'editPost';
    const disabledInputs = {
      author: isEdit,
      category: (isEdit || categoryPage),
    };
    /**
     * This default values shouldn't be necessary, but doesn't matter what I do,
     * it won't get the `defaultProps`. TODO: Investigate later.
     */
    const {
      author = '',
      body = '',
      category = '',
      title = '',
    } = props.postInfo;

    this.state = {
      author,
      body,
      category: categoryPage || category,
      disabledInputs,
      errorMessage: '',
      isFormDisabled: false,
      title,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      history,
      isAdding,
      isEditing,
    } = this.props;
    /**
     * TODO: Improve this. Add a loading message, maybe with a spinner,
     * notifying there is an edit/new post addition in progress.
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
          /* The post add failed */
          this.setState({ errorMessage: 'There was an error adding the post' });
          return;
        }
        /* The post add succeded, redirect to the previous page */
        history.goBack();
      }
    } else if (isEditingChanged) {
      if (editEnd) {
        if (nextProps.editHasFailed) {
          /* The post edit failed */
          this.setState({ errorMessage: 'There was an error editing the post' });
          return;
        }
        /* The post add succeded, redirect to the previous page */
        history.goBack();
      }
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      addPost,
      editPost,
      location: { state: { action } },
      postInfo,
    } = this.props;

    const {
      author,
      body,
      category,
      title,
    } = this.state;

    switch (action) {
      case 'addPost':
        await addPost({
          author,
          body,
          category,
          title,
        });
        break;
      default:
        await editPost(postInfo.id, { body, title });
        break;
    }
  }

  toggleFormDisabled = prevState => ({
    ...prevState,
    isFormDisabled: !prevState.isFormDisabled,
  });

  render() {
    const { categories } = this.props;
    const {
      disabledInputs: disabled,
      errorMessage,
      isFormDisabled,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="author">Author</label>
          <input
            onChange={this.handleChange}
            disabled={disabled.author || isFormDisabled}
            id="author"
            name="author"
            type="text"
            value={this.state.author}
          />
          <label htmlFor="category">Category</label>
          <select
            onChange={this.handleChange}
            disabled={disabled.category || isFormDisabled}
            id="category"
            name="category"
            value={this.state.category}
          >
            {
              categories.map(categoryOption => (
                <option
                  key={categoryOption}
                  value={categoryOption}
                >
                  {categoryOption}
                </option>
              ))
            }
          </select>
          <label htmlFor="title">Title</label>
          <input
            onChange={this.handleChange}
            disabled={isFormDisabled}
            id="title"
            name="title"
            type="text"
            value={this.state.title}
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

PostEditor.defaultProps = {
  postInfo: {
    author: '',
    body: '',
    category: '',
    title: '',
  },
};

/* eslint-disable react/forbid-prop-types */
PostEditor.propTypes = {
  addHasFailed: PropTypes.bool.isRequired,
  addPost: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  editHasFailed: PropTypes.bool.isRequired,
  editPost: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isAdding: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  postInfo: PropTypes.object,
};
/* eslint-enable react/forbid-prop-types */

export default PostEditor;
