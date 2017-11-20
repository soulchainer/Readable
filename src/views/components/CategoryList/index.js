import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
import { withLastLocation } from 'react-router-last-location';
import { Category } from 'views/components';

class CategoryList extends Component {
  componentDidMount() {
    const { fetchCategories, lastLocation } = this.props;
    console.log(lastLocation); // eslint-disable-line
    fetchCategories();
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

CategoryList.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchCategories: PropTypes.func.isRequired, // eslint-disable-line
  // eslint-disable-next-line
  lastLocation: PropTypes.object, 
  isLoading: PropTypes.bool.isRequired,
  loadHasFailed: PropTypes.bool.isRequired,
};

export default withLastLocation(CategoryList);
