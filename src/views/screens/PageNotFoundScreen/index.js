import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'views/components';

const PageNotFoundScreen = () => (
  <div className="Screen PageNotFoundScreen">
    <Header />
    <main>
      <h1 className="PageNotFoundScreen-title">404</h1>
      <p>{'Sorry, we can\'t find the page you are looking for.'}</p>
      <Link className="PageNotFoundScreen-button" to="/">
        Return to Home
      </Link>
    </main>
    <style jsx>
      {`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

export default PageNotFoundScreen;
