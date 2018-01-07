import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToEditorButton } from 'views/components';

const action = {
  comments: 'editComment',
  posts: 'editPost',
};

const iconDelete = (
  <svg
    className="icon icon--delete"
    viewBox="0 0 48 48"
  >
    <title>Delete</title>
    <path d="M42 10h-8V8c0-3.4-2.6-6-6-6h-8c-3.4 0-6 2.6-6 6v2H6c-1.2 0-2 .8-2 2s.8 2 2 2h2v26c0 3.4 2.6 6 6 6h20c3.4 0 6-2.6 6-6V14h2c1.2 0 2-.8 2-2s-.8-2-2-2zM18 8c0-1.2.8-2 2-2h8c1.2 0 2 .8 2 2v2H18V8zm18 32c0 1.2-.8 2-2 2H14c-1.2 0-2-.8-2-2V14h24v26z" />
    <path d="M20 20c-1.2 0-2 .8-2 2v12c0 1.2.8 2 2 2s2-.8 2-2V22c0-1.2-.8-2-2-2zM28 20c-1.2 0-2 .8-2 2v12c0 1.2.8 2 2 2s2-.8 2-2V22c0-1.2-.8-2-2-2z" />
  </svg>
);

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
      if (deleteEnd) {
        if (nextProps.deleteHasFailed) {
          /* The post deletion failed */
          this.setState({
            errorMessage: 'There was an error deleting the post',
          });
          return;
        }
        /**
         * The post was succesfully deleted, redirect to the category page if
         * on a PostScreen or to the main page if not
         */
        history.replace(`/${typeof category === 'string' ? category : ''}`);
      }
    }
  }

  onKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.props.onDelete();
    }
  }

  render() {
    const {
      onDelete,
      content,
      type,
    } = this.props;

    const pathname = `/${content.category}/${content.id}`;

    return (
      <span className="EditionControls">
        <span
          onClick={onDelete}
          onKeyUp={this.onKeyUp}
          aria-label="Delete"
          className="EditionControls-deleteButton"
          role="button"
          tabIndex="0"
        >
          {iconDelete}
        </span>
        <span>{this.state.errorMessage}</span>
        <ToEditorButton
          action={action[type]}
          className="EditionControls-editButton"
          content={content}
          pathname={pathname}
        />
        <style jsx>
          {`
            :global(.EditionControls-deleteButton) {
              align-self: right;
              cursor: pointer;
              display: inline-flex;
              padding: 0.5rem;
              word-break: break-all;
            }

            :global(.EditionControls-deleteButton::-moz-focus-inner) {
              padding: 0;
            }

            :global(.EditionControls-deleteButton > .icon--delete) {
              pointer-events: all;
              width: 1.2rem;
            }

            :global(.EditionControls-deleteButton:active > .icon--delete),
            :global(.EditionControls-deleteButton:focus > .icon--delete),
            :global(.EditionControls-deleteButton:hover > .icon--delete) {
              color: #e1292d;
            }
    
            path {
              pointer-events: all;
            }

            :global(.EditionControls-deleteButton:active > .icon--delete > path),
            :global(.EditionControls-deleteButton:focus > .icon--delete > path),
            :global(.EditionControls-deleteButton:hover > .icon--delete > path) {
              fill: #e1292d;
            }
          `}
        </style>
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
