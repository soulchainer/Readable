// TODO: remove when quick operations testing is done
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PruebaComp extends Component {
  componentWillMount() {
    this.props.fetchCategories(window.location.hostname);
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        { JSON.stringify(categories) }
      </div>
    );
  }
}

PruebaComp.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default PruebaComp;
