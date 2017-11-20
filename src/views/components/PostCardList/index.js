import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { PostCard } from 'views/components';

class PostCardList extends Component {
  componentDidMount() {
    const { history } = this.props;
    console.log(history); // eslint-disable-line
  }

  render() {
    const {
      isLoading, // eslint-disable-line
      loadHasFailed, // eslint-disable-line
      posts,
    } = this.props;
    const postCardList = Object.keys(posts).map(post => (
      <li>
        <PostCard key={post.id} {...post} />
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
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadHasFailed: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(PostCardList);
