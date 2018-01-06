import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CommentCounter } from 'views/components';
import { VoteScore } from 'views/containers';
import getReadableDate from 'views/utils/getReadableDate';

/* eslint-disable jsx-a11y/anchor-is-valid */
const PostCard = ({
  author,
  body,
  category,
  commentCount,
  id,
  timestamp,
  title,
  voteScore,
}) => (
  <article className="PostCard">
    <header className="PostCard-header">
      <h2 className="PostCard-title">{title}</h2>
      <div className="PostCard-metadata">
        <span className="PostCard-metadata-author">@{author}</span>
        <time
          className="PostCard-metadata-time"
          dateTime={new Date(timestamp)}
        >
          {getReadableDate(timestamp)}
        </time>
        <span className="PostCard-metadata-category">{category}</span>
        <CommentCounter
          commentCount={commentCount}
          postURL={`/${category}/${id}`}
        />
      </div>
    </header>
    <div className="PostCard-body">
      {body}
      <Link
        className="PostCard-readmore"
        to={`/${category}/${id}`}
      >
        Read More...
      </Link>
    </div>
    <footer className="PostCard-footer">
      <VoteScore
        id={id}
        score={voteScore}
        type="posts"
      />
    </footer>
    <style jsx>
      {`
        .PostCard {
          border: 1px solid #e6edf1;
          display: flex;
          flex-direction: column;
          height: 280px;
          margin: 10px;
          max-width: 90vw;
          padding: 1rem;
          width: 450px;
        }

        .PostCard:hover {
          box-shadow: 0 0 0.5rem #808080;
        }

        .PostCard-title {
          color: #01b3e3;
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .PostCard-metadata {
          align-items: center;
          color: #adadad;
          display: flex;
          flex-wrap: wrap;
          font-size: 0.9rem;
          font-style: italic;
          font-weight: 400;
          margin-left: 0.5rem;
        }

        .PostCard-metadata-author {
          color: #d23282;
          font-weigth: 700;
        }

        .PostCard-metadata-time {
          padding: 0 10px;
        }

        .PostCard-metadata-category {
          border-radius: 2px;
          background-color: #01a4d2;
          font-variant: all-small-caps;
          font-weight: 200;
          color: #fff;
          display: inline-block;
          margin: 5px 0 5px 0.5rem;
          padding: 2px 5px;
        }

        .PostCard-body {
          color: #696969;
          padding: 1rem 0;
        }

        :global(.PostCard-readmore) {
          display: flex;
          margin: 1rem 0;
        }
      `}
    </style>
  </article>
);
/* eslint-enable jsx-a11y/anchor-is-valid */

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default PostCard;
