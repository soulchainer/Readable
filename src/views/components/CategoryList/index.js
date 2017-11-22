import React from 'react';
import PropTypes from 'prop-types';
import { Category } from 'views/components';

const CategoryList = (
  { categories: { categories, isLoading, loadHasFailed } }
) => {
  const categoryList = Object.keys(categories).map(category => (
    <li key={category}>
      <Category
        name={category}
        path={categories[category]}
      />
    </li>
  ));
  return (
    <ul className="CategoryList">
      {categoryList}
    </ul>
  );
};

/* eslint-disable react/forbid-prop-types */
CategoryList.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadHasFailed: PropTypes.bool.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default CategoryList;
