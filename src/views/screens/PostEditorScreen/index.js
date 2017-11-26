import React from 'react';
import {
  /* AddPostButton, */
  CategoryList,
  PostEditor,
} from 'views/containers';
// import styles from './styles';

const PostEditorScreen = () => (
  <div className="PostScreen">
    <CategoryList />
    <PostEditor />
    {/* <AddPostButton /> */}
    {/* <style jsx>{}</style> */}
  </div>
);

export default PostEditorScreen;
