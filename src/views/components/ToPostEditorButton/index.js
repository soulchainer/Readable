import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const actions = {
  add: {
    to: {
      pathname: '/#new',
      state: {
        action: 'add',
      },
    },
    altText: 'Add Post',
    cssPath: '',

  },
  edit: {
    to: {
      pathname: './#edit',
      state: {
        action: 'edit',
      },
    },
    altText: 'Edit Post',
    cssPath: '',
  },
};

/* eslint-disable jsx-a11y/anchor-is-valid */
const ToPostEditorButton = ({ action }) => {
  const { altText, to } = actions[action];
  return <Link to={to} alt={altText}>{altText}</Link>;
};
/* eslint-enable jsx-a11y/anchor-is-valid */

ToPostEditorButton.propTypes = {
  action: PropTypes.string.isRequired,
};

export default ToPostEditorButton;
