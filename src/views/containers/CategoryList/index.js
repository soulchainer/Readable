import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { withRouter } from 'react-router';
import { CategoryList } from 'views/components';

const mapStateToProps = ({
  categories: { categories, isLoading, loadHasFailed },
}) => ({ categories, isLoading, loadHasFailed });

const categoryList = connect(mapStateToProps)(CategoryList);

export default withLastLocation(withRouter(categoryList));
