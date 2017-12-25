import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Category = ({ path, name }) => (
  <NavLink
    className="Category"
    to={`/${path}`}
  >
    {name}
    <style jsx>
      {`
        :global(.Category) {
          border-bottom: 3px solid transparent;
          color: #2a2a2e;
          display: inline-block;
          font-size: 1.2rem;
          text-decoration: none;
        }

        :global(.Category:hover) {
          border-bottom: 3px solid #000;
        }

        :global(.Category.active),
        :global(.Category:active) {
          border-bottom: 3px solid #01b3e3;
        }
      `}
    </style>
  </NavLink>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
