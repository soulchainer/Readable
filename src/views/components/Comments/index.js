import React from 'react';
import PropTypes from 'prop-types';
import {
  CommentEditor,
  CommentList,
  SortingtHat,
} from 'views/containers';

const Comments = ({ postId }) => (
  <section className="Comments">
    <h2 className="Comments-title">Comments</h2>
    <CommentEditor parentId={postId} />
    <SortingtHat type="comments" />
    <CommentList postId={postId} />
    <style jsx>
      {`
        .Comments {
          align-self: center;
          display: flex;
          flex-direction: column;
          max-width: 80vw;
          padding: 1rem;
          width: 800px;
        }

        .Comments-title {
          align-self: center;
          border-bottom: 4px solid #01b3e3;
          font-size: 1.4rem;
          font-variant: small-caps;
          margin-bottom: 0.5rem;
        }
      `}
    </style>
  </section>
);

Comments.defaultProps = {
  postId: '',
};

Comments.propTypes = {
  postId: PropTypes.string,
};

export default Comments;
