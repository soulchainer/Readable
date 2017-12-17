import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToEditorButton } from 'views/components';

const action = {
  comments: 'editComment',
  posts: 'editPost',
};

class EditionControls extends Component {
  state = {
    errorMessage: '',
  };

  componentWillReceiveProps(nextProps) {
    const {
      history,
      isDeleting,
      match: { params: { category } },
    } = this.props;
    /**
     * TODO: Improve this. Add a loading message, maybe with a spinner,
     * notifying there is an edit/new post addition in progress.
     */
    const isDeletingChanged = isDeleting !== nextProps.isDeleting;
    const deleteEnd = isDeletingChanged && !nextProps.isDeleting;

    if (isDeletingChanged) {
      console.log('A deletion was done'); // eslint-disable-line
    }
    if (isDeletingChanged) {
      if (deleteEnd) {
        if (nextProps.deleteHasFailed) {
          /* The post deletion failed */
          this.setState({
            errorMessage: 'There was an error deleting the post',
          });
          return;
        }
        /* The post was succesfully deleted, redirect to the category page */
        history.replace(`/${category}`);
      }
    }
  }

  render() {
    const {
      onDelete,
      content,
      type,
    } = this.props;

    return (
      <span className="EditionControls">
        <button
          onClick={onDelete}
          className="EditionControls-deleteButton"
        >
          Delete {type}
        </button>
        <span>{this.state.errorMessage}</span>
        <ToEditorButton
          action={action[type]}
          className="EditionControls-editButton"
          content={content}
        />
      </span>
    );
  }
}

export default EditionControls;

/* eslint-disable react/forbid-prop-types */
EditionControls.propTypes = {
  onDelete: PropTypes.func.isRequired,
  /**
   * Info of the comment or post being edited, to prefill the `form` fields.
   */
  content: PropTypes.object.isRequired,
  deleteHasFailed: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  isDeleting: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
/* eslint-enable react/forbid-prop-types */
