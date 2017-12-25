import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Category } from 'views/components';

class CategoryList extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories, isLoading, loadHasFailed } = this.props;
    const categoryList = Object.keys(categories).map(category => (
      <li
        className="CategoryList-item"
        key={category}
      >
        <Category
          name={category}
          path={categories[category]}
        />
        <style jsx>
          {`
            .CategoryList-item {
              box-sizing: border-box;
              display: inline-block;
              padding: 1rem;
            }
          `}
        </style>
      </li>
    ));
    return (
      <ul className="CategoryList">
        {isLoading}
        {loadHasFailed}
        {categoryList}
        <style jsx>
          {`
            .CategoryList {
              background-color: #f0f8ff;
              border: 1px solid #f0f0f0;
              display: flex;
              justify-content: center;
              list-style: none;
              width: 100%;
            }
          `}
        </style>
      </ul>
    );
  }
}

CategoryList.defaultProps = {
  categories: {},
  isLoading: false,
  loadHasFailed: false,
};

/* eslint-disable react/forbid-prop-types */
CategoryList.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string),
  fetchCategories: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loadHasFailed: PropTypes.bool,
};
/* eslint-enable react/forbid-prop-types */

export default CategoryList;
