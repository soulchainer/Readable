import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  componentDidMount() {
    const { fetchPostDetails, id } = this.props;
    fetchPostDetails(id);
  }

  render() {
    console.log(this.props); // eslint-disable-line
    const {
      isLoadingDetails,
      loadDetailsHasFailed,
      postDetails: {
        author,
        body,
        category,
        commentCount,
        deleted,
        timestamp,
        title,
        voteScore,
      },
    } = this.props;

    let post;

    if (deleted) {
      const errorMessage = 'This post doesn\'t exist.';
      post = <div>{errorMessage}</div>;
    } else {
      post = (
        <article
          className="Post"
          role="main"
        >
          <header className="Post-header">
            <h1 className="Post-title">{title}</h1>
            <span className="Post-category">{category}</span>
            <div className="Post-headerMetadata">
              <span>{commentCount} </span>- <span>{author} </span>-
              <time dateTime={new Date(timestamp)}> {timestamp}</time>
            </div>
          </header>
          <div>
            {isLoadingDetails}
            {loadDetailsHasFailed}
            {body}
          </div>
          <footer>
            <div>{voteScore}</div>
          </footer>
        </article>
      );
    }
    return post;
  }
}

Post.defaultProps = {
  isLoadingDetails: false,
  loadDetailsHasFailed: false,
  postDetails: {
    author: '',
    body: '',
    category: '',
    commentCount: 0,
    deleted: false,
    timestamp: Date.now(),
    title: '',
    voteScore: 0,
  },
};

Post.propTypes = {
  fetchPostDetails: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isLoadingDetails: PropTypes.bool,
  loadDetailsHasFailed: PropTypes.bool,
  postDetails: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    commentCount: PropTypes.number,
    deleted: PropTypes.bool,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    voteScore: PropTypes.number,
  }),
};

export default Post;
