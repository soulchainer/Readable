import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import routes from 'routes';
import './styles.css';

const App = () => (
  <Router>
    <div className="Root">
      <Switch>
        {routes.map(args => <Route key={args.path} {...args} />)}
      </Switch>
    </div>
  </Router>
);

export default App;
