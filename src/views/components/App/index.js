import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import routes from 'routes';

const App = () => (
  <Router>
    <LastLocationProvider>
      <div className="Root">
        <Switch>
          {routes.map(args => <Route key={args.path} {...args} />)}
        </Switch>
        {/*
          * TODO: add global styles later
          * <style jsx global>{globalCSS}</style>
          */}
      </div>
    </LastLocationProvider>
  </Router>
);

export default App;
