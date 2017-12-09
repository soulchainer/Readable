import React from 'react';
import PropTypes from 'prop-types';

const CommentEditor = ({ addComment, editComment, location }) => {
  /* eslint-disable no-console */
  console.log(addComment);
  console.log(editComment);
  /* eslint-enable no-console */
  return <span>{JSON.stringify(location)}</span>;
};

CommentEditor.propTypes = {
  addComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default CommentEditor;
