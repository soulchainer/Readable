import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import routes from 'routes';

class App extends Component {
  componentDidMount() {
    const { fetchCategories, fetchPosts } = this.props;
    fetchCategories();
    fetchPosts();
  }

  render() {
    return (
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
  }
}

App.propTypes = {
  fetchCategories: Proptypes.func.isRequired,
  fetchPosts: Proptypes.func.isRequired,
};

export default App;
