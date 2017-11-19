import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from 'views/containers/Root';
import configureStore from 'state/store';

const load = () => render(
  (
    <AppContainer>
      <Root store={configureStore({})} />
    </AppContainer>
  ), document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('views/containers/Root', load);
}

load();
