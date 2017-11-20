import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
