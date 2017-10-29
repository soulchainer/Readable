import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

const load = () => render(
  (
    <AppContainer>
      <Root />
    </AppContainer>
  ), document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/Root', load);
}

load();
