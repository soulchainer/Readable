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
    // TENGO QUE HACER DE NUEVO LA FUNCIÓN DE OBTENER POR
    // CATEGORÍA Y BORRAR EL SELECTOR
    // Y HACERLA DEBOUNCE
  }
);

class CategoryScreen extends Component {
  componentDidMount() {
    const {
      fetchCategories,
      fetchPosts
    } = this.props;
    fetchCategories();
    fetchPosts();
  }

  render() (
    <div className="CategoryScreen">
      <CategoryList categories={categories} />
      <PostCardList posts={posts} />
      {/* <AddPostButton /> */}
      {/* <style jsx>{}</style> */}
    </div>
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);

