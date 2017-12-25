import React from 'react';
import PropTypes from 'prop-types';
import {
  EditionControls,
  VoteScore,
} from 'views/containers';
import getReadableDate from 'views/utils/getReadableDate';

const Comment = ({ comment }) => {
  const {
    author,
    body,
    id,
    timestamp,
    voteScore,
  } = comment;

  return (
    <article className="Comment">
      <header className="Comment-header">
        <div className="Comment-metadata">
          <span className="Comment-metadata-author">@{author}</span>
          <time
            className="Comment-metadata-time"
            dateTime={new Date(timestamp)}
          >
            {getReadableDate(timestamp)}
          </time>
        </div>
        <EditionControls
          content={comment}
          id={id}
          type="comments"
        />
      </header>
      <div className="Comment-body">
        {body}
      </div>
      <footer className="Comment-footer">
        <VoteScore
          id={id}
          score={voteScore}
          type="comments"
        />
      </footer>
      <style jsx>
        {`
          .Comment {
            border: 1px solid #e6edf1;
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            padding: 1rem;
            width: 100%;
          }

          .Comment:nth-of-type(2n) {
            background-color: #fef6ff;
          }

          .Comment-header {
            display: flex;
            justify-content: space-between;
          }

          .Comment-metadata {
            align-items: center;
            color: #adadad;
            display: flex;
            flex-wrap: wrap;
            font-size: 0.9rem;
            font-style: italic;
            font-weight: 400;
            margin-left: 0.5rem;
          }

          .Comment-metadata-author {
            color: #d23282;
            font-weigth: 700;
          }

          .Comment-metadata-time {
            padding: 0 10px;
          }

          .Comment-body {
            color: #696969;
            padding: 1rem 0;
          }

          .Comment-footer {
            border-top: 1px dashed #add8e6;
          }
        `}
      </style>
    </article>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    deleted: PropTypes.bool,
    id: PropTypes.string,
    parentDeleted: PropTypes.bool,
    parentId: PropTypes.string,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
  }).isRequired,
};
