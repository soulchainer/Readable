import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortingtHat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingDirection: props.sortingDirection,
      sortingMethod: props.sortingMethod,
    };
  }

  onSortingDirectionChange = (event) => {
    const { sortingDirection } = this.state;
    const newSortingDirection = event.target.value;
    const sortingDirectionChanged = newSortingDirection !== sortingDirection;
    if (sortingDirectionChanged) {
      const { changeSortingDirection } = this.props;
      this.setState({ sortingDirection: newSortingDirection }, () => {
        changeSortingDirection({ sortingDirection: newSortingDirection });
      });
    }
  };

  onSortingMethodChange = (event) => {
    const { sortingMethod } = this.state;
    const newSortingMethod = event.target.value;
    const sortingMethodChanged = newSortingMethod !== sortingMethod;
    if (sortingMethodChanged) {
      const { changeSortingMethod } = this.props;
      this.setState({ sortingMethod: newSortingMethod }, () => {
        changeSortingMethod({ sortingMethod: newSortingMethod });
      });
    }
  };

  render() {
    const {
      sortingDirections,
      sortingMethods,
    } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="sortingMethod">Sorted By:</label>
          <select
            onChange={this.onSortingMethodChange}
            id="sortingMethod"
            name="sortingMethod"
            value={this.state.sortingMethod}
          >
            {
              sortingMethods.map(methodOption => (
                <option
                  key={methodOption}
                  value={methodOption}
                >
                  {methodOption}
                </option>
              ))
            }
          </select>
          <label htmlFor="sortingDirection">Sorted By:</label>
          <select
            onChange={this.onSortingDirectionChange}
            id="sortingDirection"
            name="sortingDirection"
            value={this.state.sortingDirection}
          >
            {
              sortingDirections.map(directionOption => (
                <option
                  key={directionOption}
                  value={directionOption}
                >
                  {directionOption}
                </option>
              ))
            }
          </select>
        </form>
      </div>
    );
  }
}

SortingtHat.propTypes = {
  changeSortingDirection: PropTypes.func.isRequired,
  changeSortingMethod: PropTypes.func.isRequired,
  sortingDirection: PropTypes.oneOf(['ASC', 'DESC']).isRequired,
  sortingMethod: PropTypes.string.isRequired,
  sortingMethods: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortingDirections: PropTypes.arrayOf(PropTypes.oneOf(['ASC', 'DESC'])).isRequired,
};

export default SortingtHat;
