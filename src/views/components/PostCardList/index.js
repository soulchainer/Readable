import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withLastLocation } from 'react-router-last-location';
import { withRouter } from 'react-router';
import { PostCard } from 'views/components';

class PostCardList extends Component {
  componentDidMount() {
    const {
      fetchPosts,
      lastLocation: lastPath,
      location: { pathname: currentPath },
    } = this.props;
    const shouldFetchPosts = !lastPath || currentPath === '/';
    if (shouldFetchPosts) fetchPosts();
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

/* eslint-disable react/forbid-prop-types */
PostCardList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  lastLocation: PropTypes.object,
  location: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadHasFailed: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
/* eslint-enable react/forbid-prop-types */

PostCardList.defaultProps = {
  lastLocation: null,
};

export default withLastLocation(withRouter(PostCardList));
