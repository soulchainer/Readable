import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
import { withLastLocation } from 'react-router-last-location';
import { PostCard } from 'views/components';

class PostCardList extends Component {
  componentDidMount() {
    const { fetchPosts, lastLocation } = this.props;
    console.log(lastLocation); // eslint-disable-line
    fetchPosts();
  }

  render() {
    const {
      isLoading, // eslint-disable-line
      loadHasFailed, // eslint-disable-line
      posts,
    } = this.props;
    const postCardList = posts.map(post => (
      <li key={post.id}>
        <PostCard {...post} />
      </li>
    ));
    return (
      <ul className="PostCardList">
        {postCardList}
      </ul>
    );
  }
}

PostCardList.propTypes = {
  fetchPosts: PropTypes.func.isRequired, // eslint-disable-line
  // eslint-disable-next-line
  lastLocation: PropTypes.object, 
  isLoading: PropTypes.bool.isRequired,
  loadHasFailed: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withLastLocation(PostCardList);
