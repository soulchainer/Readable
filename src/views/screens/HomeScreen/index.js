import React from 'react';
import {
  /* AddPostButton, */
  CategoryList,
  PostCardList,
} from 'views/containers';
// import styles from './styles';

const HomeScreen = () => (
  <div className="HomeScreen">
    <CategoryList />
    <PostCardList />
    {/* <AddPostButton /> */}
    {/* <style jsx>{}</style> */}
  </div>
);

export default HomeScreen;
