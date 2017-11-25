import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostCard } from 'views/components';

class PostCardList extends Component {
  componentDidMount() {
    const { category, fetchPosts } = this.props;
    fetchPosts(category);
  }

  componentWillReceiveProps({ category }) {
    const { category: lastCategory, fetchPosts } = this.props;
    if (category !== lastCategory) fetchPosts(category);
  }

  render() {
    const { isLoading, loadHasFailed, posts } = this.props;
    const postCardList = posts.map(post => (
      <li key={post.id}>
        <PostCard {...post} />
      </li>
    ));
    return (
      <ul className="PostCardList">
        {isLoading}
        {loadHasFailed}
        {postCardList}
      </ul>
    );
  }
}

PostCardList.defaultProps = {
  category: '',
  isLoading: false,
  loadHasFailed: false,
  posts: [],
};

PostCardList.propTypes = {
  category: PropTypes.string,
  fetchPosts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loadHasFailed: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default PostCardList;
