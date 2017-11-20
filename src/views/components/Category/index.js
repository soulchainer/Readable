import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Category = ({ path, name }) => (
  <NavLink to={path}>{name}</NavLink>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
