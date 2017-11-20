import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { withRouter } from 'react-router';
import { categoriesOperations } from 'state/ducks/categories';
import { CategoryList } from 'views/components';

const mapStateToProps = ({
  categories: { categories, isLoading, loadHasFailed },
}) => ({ categories, isLoading, loadHasFailed });

const mapDispatchToProps = dispatch => (
  {
    fetchCategories: () => dispatch(categoriesOperations.fetchCategories()),
  }
);

const categoryList = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default withLastLocation(withRouter(categoryList));
