import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const actions = {
  add: {
    to: {
      state: {
        action: 'add',
      },
    },
    altText: 'Add Post',
    cssPath: '',

  },
  edit: {
    to: {
      state: {
        action: 'edit',
      },
    },
    altText: 'Edit Post',
    cssPath: '',
  },
};

/* eslint-disable jsx-a11y/anchor-is-valid */
const ToPostEditorButton = ({
  action,
  category,
  location,
  postInfo,
}) => {
  const { altText, to } = actions[action];
  if (Object.keys(postInfo)) to.state.postInfo = postInfo;
  if (category) to.state.category = category;
  to.pathname = `${location.pathname}#${action}`;
  return <Link to={to} alt={altText}>{altText}</Link>;
};
/* eslint-enable jsx-a11y/anchor-is-valid */

ToPostEditorButton.defaultProps = {
  category: '',
  postInfo: {},
};

ToPostEditorButton.propTypes = {
  /**
   * Name of the action to be done.
   */
  action: PropTypes.oneOf(['add', 'edit']).isRequired,
  /**
   * If the button is placed into a `CategoryScreen`, this will have the name
   * of the current category.
   */
  category: PropTypes.string,
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  /**
   * Info of the post being edited, to prefill the `form` fields.
   */
  postInfo: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ToPostEditorButton);
