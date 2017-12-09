import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router';
import {
  CategoryList,
  PostEditor,
} from 'views/containers';
// import styles from './styles';

const PostEditorScreen = ({ location: { state } }) => {
  const redirect = <Redirect to="/" />;
  if (state) {
    const { action, content } = state;
    const legalAction = ['addPost', 'editPost'].indexOf(action) > -1;
    if (legalAction) {
      return (
        <div className="PostScreen">
          <CategoryList />
          <PostEditor postInfo={content} />
          {/* <style jsx>{}</style> */}
        </div>
      );
    }
  }
  return redirect;
};

PostEditorScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default withRouter(PostEditorScreen);
