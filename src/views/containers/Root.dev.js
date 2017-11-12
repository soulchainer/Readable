import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import Prueba from './Prueba'; // TODO: remove when quick operations testing is done

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>Hello dev world!</h1>
      <Prueba /> {/* TODO: remove when quick operations testing is done */}
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default Root;
