import React from 'react';
import { ToEditorButton } from 'views/components';
import {
  CategoryList,
  PostCardList,
} from 'views/containers';
// import styles from './styles';

const HomeScreen = () => (
  <div className="HomeScreen">
    <CategoryList />
    <PostCardList />
    <ToEditorButton action="addPost" />
    {/* <style jsx>{}</style> */}
  </div>
);

export default HomeScreen;
