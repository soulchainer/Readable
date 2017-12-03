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
      title,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
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
        addPost({
          author,
          body,
          category,
          title,
        });
        break;
      default:
        editPost(postInfo.id, { body, title });
        break;
    }
  }

  render() {
    const { location: { state: { action, category } } } = this.props;
    const disabled = {};

    const isEdit = action === 'edit';
    if (isEdit) disabled.author = true;
    if (isEdit || category) disabled.category = true;
    if (category && !this.state.category) this.setState({ category });

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="author">Author</label>
        <input
          onChange={this.handleChange}
          disabled={disabled.author}
          id="author"
          name="author"
          type="text"
          value={this.state.author}
        />
        <label htmlFor="category">Category</label>
        <select
          onChange={this.handleChange}
          disabled={disabled.category}
          id="category"
          name="category"
          value={this.state.category}
        >
          <option value={this.state.category}>{this.state.category}</option>
          <option value="category2">Category 2</option>
          <option value="Category3">Category 3</option>
        </select>
        <label htmlFor="title">Title</label>
        <input
          onChange={this.handleChange}
          id="title"
          name="title"
          type="text"
          value={this.state.title}
        />
        <label htmlFor="body">Body</label>
        <textarea
          onChange={this.handleChange}
          id="body"
          name="body"
          value={this.state.body}
        />
        <input
          type="submit"
          name="submit"
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
  editPost: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  postInfo: PropTypes.object,
};
/* eslint-enable react/forbid-prop-types */

export default PostEditor;
