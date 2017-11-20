import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ path, name }) => (
  <a href={path}>{name}</a>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
