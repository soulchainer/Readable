import React from 'react';

const Spinner = () => (
  <div className="Spinner">
    <svg viewBox="0 0 48 48">
      <path
        d="M16 0C7.289 0 .204 6.961.005 15.624.19 8.066 5.937 2 13 2c7.18 0 13 6.268 13 14a3 3 0 1 0 6 0c0-8.837-7.163-16-16-16zm0 32c8.711 0 15.796-6.961 15.995-15.624C31.81 23.934 26.063 30 19 30c-7.18 0-13-6.268-13-14a3 3 0 1 0-6 0c0 8.837 7.163 16 16 16z"
      />
    </svg>
    <div className="Spinner-text">LOADING</div>
    <style jsx>
      {`
        .Spinner {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        .Spinner-text {
          align-self: flex-start;
          font-size: 2rem;
        }

        svg {
          width: 4rem;
        }

        path {
          animation: 1s linear 0s infinite spin;
          fill: #01a4d2;
          transform-origin: center;
        }

        @keyframes spin {
          from { transform: rotateZ(0); }
          to { transform: rotateZ(360deg); }
        }
      `}
    </style>
  </div>
);

export default Spinner;
