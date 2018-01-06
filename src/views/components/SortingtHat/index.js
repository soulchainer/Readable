import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ASC = (
  <svg
    className="icon"
    viewBox="0 0 48 48"
  >
    <title>Sorted in ascending order</title>
    <path
      d="M15 36V0H9v36H1.5L12 46.5 22.5 36H15zm28.5 12h-12a1.501 1.501 0 0 1-1.248-2.332L40.697 30H31.5a1.5 1.5 0 0 1 0-3h12a1.501 1.501 0 0 1 1.248 2.332L34.303 45H43.5a1.5 1.5 0 0 1 0 3zm4.342-29.171l-9-18a1.5 1.5 0 0 0-2.684 0l-9 18a1.5 1.5 0 1 0 2.684 1.341l2.585-5.171h10.146l2.585 5.171a1.5 1.5 0 0 0 2.683-1.341zM33.927 12L37.5 4.854 41.073 12h-7.146z"
    />
  </svg>
);

const DESC = (
  <svg
    className="icon"
    viewBox="0 0 48 48"
  >
    <title>Sorted in descending order</title>
    <path
      d="M15 36V0H9v36H1.5L12 46.5 22.5 36H15zM43.5 21h-12a1.501 1.501 0 0 1-1.248-2.332L40.697 3H31.5a1.5 1.5 0 0 1 0-3h12a1.501 1.501 0 0 1 1.248 2.332L34.303 18H43.5a1.5 1.5 0 0 1 0 3zM47.842 45.829l-9-18a1.5 1.5 0 0 0-2.684 0l-9 18a1.5 1.5 0 1 0 2.684 1.341l2.586-5.171h10.146l2.585 5.171a1.5 1.5 0 0 0 2.683-1.341zM33.927 39l3.573-7.146L41.073 39h-7.146z"
    />
  </svg>
);

const icons = {
  ASC,
  DESC,
};

class SortingtHat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingDirection: props.sortingDirection,
      sortingMethod: props.sortingMethod,
    };
  }

  onKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.onSortingDirectionChange(event);
    }
  }

  onSortingDirectionChange = (event) => {
    event.preventDefault();
    const { sortingDirections } = this.props;
    const { sortingDirection } = this.state;
    const currentIndex = sortingDirections.indexOf(sortingDirection);
    const newSortingDirection = sortingDirections[(currentIndex + 1) % 2];
    const { changeSortingDirection } = this.props;
    this.setState({ sortingDirection: newSortingDirection }, () => {
      changeSortingDirection({ sortingDirection: newSortingDirection });
    });
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
      className,
      sortingMethods,
    } = this.props;

    return (
      <div className={classnames('SortingtHat', { className })}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="sortingMethod">Sort By</label>
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
          <span
            onClick={this.onSortingDirectionChange}
            onKeyUp={this.onKeyUp}
            aria-label="Change sort direction order"
            className="iconButton"
            role="button"
            tabIndex="0"
          >
            {icons[this.state.sortingDirection]}
          </span>
        </form>
        <style jsx>
          {`
            .SortingtHat {
              display: inline-block;
            }

            label {
              padding: 0.5rem;
            }

            .iconButton {
              cursor: pointer;
              display: inline-block;
              padding: 0.5rem;
              word-break: break-all;
            }

            .iconButton::-moz-focus-inner {
              padding: 0;
            }

            .iconButton > :global(.icon) {
              pointer-events: all;
              width: 1.2rem;
            }
    
            .iconButton:active > :global(.icon),
            .iconButton:focus > :global(.icon),
            .iconButton:hover > :global(.icon) {
              color: #01a4d2;
            }
    
            path {
              pointer-events: all;
            }
    
            .iconButton:active > :global(.icon > path),
            .iconButton:focus > :global(.icon > path),
            .iconButton:hover > :global(.icon > path) {
              fill: #01a4d2;
            }
          `}
        </style>
      </div>
    );
  }
}

SortingtHat.defaultProps = {
  className: '',
};

SortingtHat.propTypes = {
  changeSortingDirection: PropTypes.func.isRequired,
  changeSortingMethod: PropTypes.func.isRequired,
  className: PropTypes.string,
  sortingDirection: PropTypes.oneOf(['ASC', 'DESC']).isRequired,
  sortingMethod: PropTypes.string.isRequired,
  sortingMethods: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortingDirections: PropTypes.arrayOf(PropTypes.oneOf(['ASC', 'DESC'])).isRequired,
};

export default SortingtHat;
