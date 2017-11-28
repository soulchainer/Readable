import React from 'react';
import { Link } from 'react-router-dom';

const to = {
  pathname: '/#new',
  state: { action: 'add' },
};
/* eslint-disable jsx-a11y/anchor-is-valid */
const AddPostButton = () => (
  <Link to={to} alt="Add Post">Add Post</Link>
);
/* eslint-enable jsx-a11y/anchor-is-valid */

export default AddPostButton;
