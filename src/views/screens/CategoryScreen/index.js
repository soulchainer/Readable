import React from 'react';
import PropTypes from 'prop-types';
import { ToEditorButton } from 'views/components';
import {
  CategoryList,
  PostCardList,
} from 'views/containers';
// import styles from './styles';

const CategoryScreen = ({ match }) => {
  const { category } = match.params;
  return (
    <div className="CategoryScreen">
      <CategoryList />
      <PostCardList category={category} />
      <ToEditorButton
        action="addPost"
        category={category}
      />
      {/* <style jsx>{}</style> */}
    </div>
  );
};

CategoryScreen.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default CategoryScreen;
