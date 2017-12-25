import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  EditionControls,
  VoteScore,
} from 'views/containers';
import getReadableDate from 'views/utils/getReadableDate';

class Post extends Component {
  render() {
    const {
      isLoadingDetails,
      loadDetailsHasFailed,
      postDetails: {
        author,
        body,
        category,
        deleted,
        timestamp,
        title,
        voteScore,
      },
      postDetails,
      postId,
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
            <div className="Post-metadata">
              <span className="Post-metadata-author">@{author}</span>
              <time
                className="Post-metadata-time"
                dateTime={new Date(timestamp)}
              >
                {getReadableDate(timestamp)}
              </time>
              <span className="Post-metadata-category">{category}</span>
            </div>
          </header>
          <div>
            {isLoadingDetails}
            {loadDetailsHasFailed}
            {body}
          </div>
          <footer className="Post-footer">
            <VoteScore
              id={postId}
              score={voteScore}
              type="posts"
            />
            <EditionControls
              content={postDetails}
              id={postId}
              type="posts"
            />
          </footer>
          <style jsx>
            {`
              .Post {
                align-self: center;
                border: 1px solid #e6edf1;
                display: flex;
                flex-direction: column;
                margin: 10px;
                max-width: 90vw;
                padding: 1rem;
                width: 800px;
              }
      
              .Post-title {
                color: #01b3e3;
                font-size: 1.4rem;
                margin-bottom: 0.5rem;
              }
      
              .Post-metadata {
                align-items: center;
                color: #adadad;
                display: flex;
                flex-wrap: wrap;
                font-size: 0.9rem;
                font-style: italic;
                font-weight: 400;
                margin-left: 0.5rem;
              }
      
              .Post-metadata-author {
                color: #d23282;
                font-weigth: 700;
              }
      
              .Post-metadata-time {
                padding: 0 10px;
              }
      
              .Post-metadata-category {
                border-radius: 2px;
                background-color: #01a4d2;
                font-variant: all-small-caps;
                font-weight: 200;
                color: #fff;
                display: inline-block;
                margin: 5px 0 5px 0.5rem;
                padding: 2px 5px;
              }
      
              .Post-body {
                color: #696969;
                padding: 1rem 0;
              }

              .Post-footer {
                display: flex;
                justify-content: space-between;
              }
            `}
          </style>
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
  postId: PropTypes.string.isRequired,
};

export default Post;
