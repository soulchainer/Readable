import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PostCard } from 'views/components';
import { SortingtHat } from 'views/containers';

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
      <div className="PostCardList">
        <SortingtHat type="posts" />
        <ul className="PostCardList-list">
          {isLoading}
          {loadHasFailed}
          {postCardList}
        </ul>
        <style jsx>
          {`
            .PostCardList {
              display: flex;
              flex-direction: column;
              padding: 1rem;
            }

            .PostCardList-list {
              display: flex;
              flex-wrap: wrap;
              list-style: none;
            }
          `}
        </style>
      </div>
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
