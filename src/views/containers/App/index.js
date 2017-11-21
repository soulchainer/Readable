import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { withRouter } from 'react-router';
import { App } from 'views/components';
import { categoriesOperations } from 'state/ducks/categories';
import { postsOperations } from 'state/ducks/posts';

const mapDispatchToProps = dispatch => (
  {
    fetchCategories: () => dispatch(categoriesOperations.fetchCategories()),
    fetchPosts: () => dispatch(postsOperations.fetchPosts()),
  }
);

const app = connect(null, mapDispatchToProps)(App);

export default withLastLocation(withRouter(app));
