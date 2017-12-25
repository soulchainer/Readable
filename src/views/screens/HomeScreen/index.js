import React from 'react';
import { Header, ToEditorButton } from 'views/components';
import { PostCardList } from 'views/containers';
// import styles from './styles';

const HomeScreen = () => (
  <div className="Screen HomeScreen">
    <Header />
    <PostCardList />
    <ToEditorButton action="addPost" />
    {/* <style jsx>{}</style> */}
  </div>
);

export default HomeScreen;
