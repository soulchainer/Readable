import React from 'react';
import PropTypes from 'prop-types';
import { ToEditorButton } from 'views/components';

const action = {
  comments: 'editComment',
  posts: 'editPost',
};

const EditionControls = ({
  onDelete,
  content,
  type,
}) => (
  <span className="EditionControls">
    <button
      onClick={onDelete}
      className="EditionControls-deleteButton"
    >
      Delete {type}
    </button>
    <ToEditorButton
      action={action[type]}
      className="EditionControls-editButton"
      content={content}
    />
  </span>
);

export default EditionControls;

EditionControls.propTypes = {
  onDelete: PropTypes.func.isRequired,
  /**
   * Info of the comment or post being edited, to prefill the `form` fields.
   */
  content: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  type: PropTypes.string.isRequired,
};
