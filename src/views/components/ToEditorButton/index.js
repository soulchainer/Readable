import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const actions = {
  addPost: {
    altText: 'Add Post',
    cssPath: '',
  },
  editComment: {
    altText: 'Edit Comment',
    cssPath: '',
  },
  editPost: {
    altText: 'Edit Post',
    cssPath: '',
  },
};

/* eslint-disable jsx-a11y/anchor-is-valid */
const ToEditorButton = ({
  action,
  location,
  content,
}) => {
  const { altText } = actions[action];
  const pathname = `${location.pathname}#${action}`;
  const hasContent = Object.keys(content);
  const to = {
    pathname,
    state: {
      action,
      content: hasContent ? content : null,
    },
  };

  return (
    <Link
      alt={altText}
      to={to}
    >
      {altText}
    </Link>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid */

ToEditorButton.defaultProps = {
  content: {},
};

ToEditorButton.propTypes = {
  /**
   * Name of the action to be done.
   */
  action: PropTypes.oneOf(['addPost', 'editComment', 'editPost']).isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  /**
   * Info of the comment or post being edited, to prefill the `form` fields.
   */
  content: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ToEditorButton);
