import React from 'react';
import { ToPostEditorButton } from 'views/components';
import {
  CategoryList,
  PostCardList,
} from 'views/containers';
// import styles from './styles';

const HomeScreen = () => (
  <div className="HomeScreen">
    <CategoryList />
    <PostCardList />
    <ToPostEditorButton action="add" />
    {/* <style jsx>{}</style> */}
  </div>
);

export default HomeScreen;
