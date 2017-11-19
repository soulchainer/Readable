import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

class Root extends Component {
  state = { devtools: null };

  /**
   * Do conditional imports when component is mounted.
   */
  componentDidMount() {
    const { NODE_ENV: env } = process.env;
    const isDev = env === 'development';
    if (isDev) {
      import('./DevTools')
        .then(module => this.setState({ devtools: module.default }));
    }
  }

  render() {
    const { store } = this.props;
    const { devtools: DevTools } = this.state;
    return (
      <Provider store={store}>
        <div>
          {DevTools && <DevTools />}
          <App />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default Root;
