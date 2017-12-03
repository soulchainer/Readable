import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostEditor extends Component {
  constructor(props) {
    super(props);
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
      category,
      isFormDisabled: false,
      title,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isAdding, isEditing } = this.props;
    /**
     * TODO: Improve this. Add a loading message, maybe with a spinner,
     * notifying there is an edit/new post addition in progress.
     * Add, after the addition/edit, redirect to the proper screen
     * (home/category/post)
     */
    if (isAdding !== nextProps.isAdding || isEditing !== nextProps.isEditing) {
      this.setState(prevState => ({
        ...prevState,
        isFormDisabled: !prevState.isFormDisabled,
      }));
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
      case 'add':
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

  render() {
    const {
      categories,
      location: { state: { action } },
      match: { params: { category } },
    } = this.props;
    const disabled = {};

    const { isFormDisabled } = this.state;
    const isEdit = action === 'edit';
    disabled.author = isEdit;
    disabled.category = (isEdit || category);
    if (category && this.state.category !== category) this.setState({ category });

    return (
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
  addPost: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  editPost: PropTypes.func.isRequired,
  isAdding: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  postInfo: PropTypes.object,
};
/* eslint-enable react/forbid-prop-types */

export default PostEditor;
