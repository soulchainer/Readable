import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <h1>Hello prod world!</h1>
      </Provider>
    );
  }
}
