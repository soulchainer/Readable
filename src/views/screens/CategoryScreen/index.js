import React from 'react';
import {
  /* AddPostButton, */
  CategoryList,
  PostCardList,
} from 'views/containers';
// import styles from './styles';

const CategoryScreen = () => (
  <div className="CategoryScreen">
    <CategoryList />
    <PostCardList />
    {/* <AddPostButton /> */}
    {/* <style jsx>{}</style> */}
  </div>
);

export default CategoryScreen;
