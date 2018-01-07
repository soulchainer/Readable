import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const iconAdd = (
  <svg
    className="icon icon--addPost"
    viewBox="0 0 48 48"
  >
    <title>Add Post</title>
    <path d="M24 2C11.8 2 2 11.8 2 24s9.8 22 22 22 22-9.8 22-22S36.2 2 24 2zm0 40C14 42 6 34 6 24S14 6 24 6s18 8 18 18-8 18-18 18z" />
    <path d="M32 22h-6v-6c0-1.2-.8-2-2-2s-2 .8-2 2v6h-6c-1.2 0-2 .8-2 2s.8 2 2 2h6v6c0 1.2.8 2 2 2s2-.8 2-2v-6h6c1.2 0 2-.8 2-2s-.8-2-2-2z" />
  </svg>
);

const iconEdit = (
  <svg
    className="icon icon--edit"
    viewBox="0 0 48 48"
  >
    <title>Edit</title>
    <path d="M41.8 6C36.4.6 27.4.6 22 6L8.6 19.6c-.4.4-.6.8-.6 1.4v16.2l-5.4 5.4c-.8.8-.8 2 0 2.8.4.4.8.6 1.4.6s1-.2 1.4-.6l5.4-5.4H27c.6 0 1-.2 1.4-.6l13.4-13.6c5.6-5.4 5.6-14.2 0-19.8zM26.2 36H14.8l4-4h11.4l-4 4zM39 23l-4.8 5H22.8l10.6-10.6c.8-.8.8-2 0-2.8s-2-.8-2.8 0l-14 14-4.6 4.6V21.8l13-13c4-4 10.2-4 14.2 0C43 12.8 43 19.2 39 23z" />
  </svg>
);

const actions = {
  addPost: {
    altText: 'Add Post',
    icon: iconAdd,
  },
  editComment: {
    altText: 'Edit Comment',
    icon: iconEdit,
  },
  editPost: {
    altText: 'Edit Post',
    icon: iconEdit,
  },
};

/* eslint-disable jsx-a11y/anchor-is-valid */
const ToEditorButton = ({
  action,
  content,
  location,
  pathname,
}) => {
  const {
    altText,
    icon,
  } = actions[action];
  const hash = (action !== 'editComment') ? `#${action}` : '';
  const path = `${pathname || location.pathname}${hash}`;
  const hasContent = Object.keys(content);
  const to = {
    pathname: path,
    state: {
      action,
      content: hasContent ? content : null,
    },
  };

  return (
    <Link
      alt={altText}
      className="iconButton"
      to={to}
    >
      {icon}
      <style jsx>
        {`
          :global(.iconButton) {
            align-self: right;
            display: inline-flex;
            padding: 0.5rem;
            word-break: break-all;
          }

          :global(.iconButton::-moz-focus-inner) {
            padding: 0;
          }

          :global(.iconButton > .icon) {
            pointer-events: all;
            width: 1.2rem;
          }

          :global(.iconButton > .icon--addPost) {
            margin: 1rem;
            transform: scale(2.4);
          }
  
          :global(.iconButton:active > .icon),
          :global(.iconButton:focus > .icon),
          :global(.iconButton:hover > .icon) {
            color: #01a4d2;
          }

          :global(.iconButton:active > .icon--addPost),
          :global(.iconButton:focus > .icon--addPost),
          :global(.iconButton:hover > .icon--addPost) {
            color: #1ba949;
          }

          :global(.iconButton:active > .icon--edit),
          :global(.iconButton:focus > .icon--edit),
          :global(.iconButton:hover > .icon--edit) {
            color: #ec7a19;
          }
  
          path {
            pointer-events: all;
          }
  
          :global(.iconButton:active > .icon > path),
          :global(.iconButton:focus > .icon > path),
          :global(.iconButton:hover > .icon > path) {
            fill: #01a4d2;
          }

          :global(.iconButton:active > .icon--addPost > path),
          :global(.iconButton:focus > .icon--addPost > path),
          :global(.iconButton:hover > .icon--addPost > path) {
            fill: #1ba949;
          }

          :global(.iconButton:active > .icon--edit > path),
          :global(.iconButton:focus > .icon--edit > path),
          :global(.iconButton:hover > .icon--edit > path) {
            fill: #ec7a19;
          }
        `}
      </style>
    </Link>
  );
};
/* eslint-enable jsx-a11y/anchor-is-valid */

ToEditorButton.defaultProps = {
  content: {},
  pathname: '',
};

ToEditorButton.propTypes = {
  /**
   * Name of the action to be done.
   */
  action: PropTypes.oneOf(['addPost', 'editComment', 'editPost']).isRequired,
  /* eslint-disable react/forbid-prop-types */
  /**
   * Info of the comment or post being edited, to prefill the `form` fields.
   */
  content: PropTypes.object,
  location: PropTypes.object.isRequired,
  /**
   * Pathname of the post, util for `editPost` actions comming form a post list
   */
  pathname: PropTypes.string,
  /* eslint-enable react/forbid-prop-types */
};

export default withRouter(ToEditorButton);
