// TODO: remove when quick operations testing is done
import { connect } from 'react-redux';
import PruebaComp from '../components/PruebaComp';
import { categoriesOperations } from '../../state/ducks/categories';

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => (
  {
    fetchCategories: hostname => dispatch(categoriesOperations.fetchCategories(hostname)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PruebaComp);
