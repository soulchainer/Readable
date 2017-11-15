// TODO: remove when quick operations testing is done
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PruebaComp extends Component {
  componentWillMount() {
    const { hostname } = window.location;
    const postId = '8xf0y6ziyjabvozdd253nd';
    // quick test of fetchCategories
    this.props.fetchCategories(hostname);
    // quick test of fetchComments
    this.props.fetchComments(hostname, postId);
    // quick test of editComment
    this.props.editComment(
      hostname,
      '894tuq4ut84ut8v4t8wun89g',
      'Hola Caracola',
    );
    // quick test of addComment
    const params = {
      author: 'Juan Riquelme',
      body: '¿Será que comemos?',
      parentId: postId,
    };
    this.props.addComment(
      hostname,
      params,
    );
    // quick test of deleteComment
    this.props.deleteComment(
      hostname,
      '0662d94e-ad49-42c2-b58f-d861c3988f1b',
    );
  }

  render() {
    const { categories, comments } = this.props;

    return (
      <div>
        <p>Categories</p>
        { JSON.stringify(categories) }
        <p>Comments</p>
        { JSON.stringify(comments) }
      </div>
    );
  }
}

PruebaComp.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

export default PruebaComp;
