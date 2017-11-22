import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoriesOperations } from 'state/ducks/categories';
import { postsOperations } from 'state/ducks/posts';
import {
  /* AddPostButton, */
  CategoryList,
  PostCardList,
} from 'views/components';
// import styles from './styles';

const mapStateToProps = ({ categories, posts }) => ({ categories, posts });

const mapDispatchToProps = dispatch => (
  {
    fetchCategories: () => dispatch(categoriesOperations.fetchCategories()),
    fetchPosts: () => dispatch(postsOperations.fetchPosts()),
  }
);

class HomeScreen extends Component {
  componentDidMount() {
    const {
      fetchCategories,
      fetchPosts
    } = this.props;
    fetchCategories();
    fetchPosts();
  }

  render() (
    <div className="HomeScreen">
      <CategoryList categories={categories} />
      <PostCardList posts={posts} />
      {/* <AddPostButton /> */}
      {/* <style jsx>{}</style> */}
    </div>
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
