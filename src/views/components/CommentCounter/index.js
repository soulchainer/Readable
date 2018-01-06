import React from 'react';
import PropTypes from 'prop-types';

const CommentCounter = ({ commentCount, postURL }) => (
  <div className="CommentCounter">
    <span className="CommentCounter-count">{commentCount}</span>
    <a
      alt="Comments"
      className="iconButton"
      href={`${postURL}#Comments`}
      title="See comments"
    >
      <svg className="icon" viewBox="0 0 48 48">
        <path d="M44 21.8C43.4 12.2 35.8 4.4 26 4h-1c-3 0-5.8.6-8.4 2C10 9.2 6 15.8 6 23c0 2.6.6 5.4 1.6 7.8L4 41.4c-.2.8 0 1.6.4 2 .6.4 1 .6 1.6.6.2 0 .4 0 .6-.2l10.6-3.6c2.4 1 5 1.6 7.8 1.6 7.2 0 13.8-4 17-10.4 1.4-2.6 2-5.6 2-8.6v-1zM40 23c0 2.4-.6 4.6-1.6 6.8C35.8 35 30.8 38 25 38c-2.4 0-4.6-.6-6.6-1.6-.4-.2-1-.2-1.6-.2l-7.6 2.6 2.6-7.6c.2-.6.2-1-.2-1.6-1-2-1.6-4.4-1.6-6.6 0-5.8 3.2-10.8 8.4-13.4 2-1 4.4-1.6 6.6-1.6h.8c7.6.4 13.6 6.4 14.2 14v1z" />
      </svg>
    </a>
    <style jsx>
      {`
        .CommentCounter {
          align-items: center;
          display: flex;
          margin: 0 .4rem;
        }

        .CommentCounter-count {
          color: #d23282;
        }
      `}
    </style>
  </div>
);

CommentCounter.defaultProps = {
  commentCount: 0,
};

CommentCounter.propTypes = {
  commentCount: PropTypes.number,
  postURL: PropTypes.string.isRequired,
};

export default CommentCounter;
