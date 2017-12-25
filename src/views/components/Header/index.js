import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryList } from 'views/containers';

const Header = () => (
  <header className="Header">
    <Link
      className="Header-brand"
      to="/"
    >
      NanoReads
    </Link>
    <CategoryList />
    <style jsx>
      {`
        .Header {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 2rem;
        }

        .Header > :global(.Header-brand) {
          font-family: 'Vollkorn', serif;
          font-size: 1.8rem;
          font-variant: all-small-caps;
          font-weight: 600;
          color: #0c0c0d;
          letter-spacing: 0.2em;
          text-decoration: none;
        }
      `}
    </style>
  </header>
);

export default Header;
