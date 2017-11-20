import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Category } from 'views/components';

class CategoryList extends Component {
  componentDidMount() {
    const {
      fetchCategories,
      lastLocation: lastPath,
      location: { pathname: currentPath },
    } = this.props;
    const shouldFetchCategories = !lastPath || currentPath === '/';
    if (shouldFetchCategories) fetchCategories();
  }

  render() {
    const {
      categories,
      isLoading, // eslint-disable-line
      loadHasFailed, // eslint-disable-line
    } = this.props;
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
  }
}

/* eslint-disable react/forbid-prop-types */
CategoryList.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchCategories: PropTypes.func.isRequired,
  lastLocation: PropTypes.object,
  location: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadHasFailed: PropTypes.bool.isRequired,
};
/* eslint-enable react/forbid-prop-types */

CategoryList.defaultProps = {
  lastLocation: null,
};

export default CategoryList;
