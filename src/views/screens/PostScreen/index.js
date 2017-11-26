import React from 'react';
import PropTypes from 'prop-types';
import {
  /* AddPostButton, */
  CategoryList,
  Post,
} from 'views/containers';
// import styles from './styles';

const PostScreen = ({ match }) => {
  const { postId } = match.params;
  return (
    <div className="PostScreen">
      <CategoryList />
      <Post id={postId} />
      {/* <AddPostButton /> */}
      {/* <style jsx>{}</style> */}
    </div>
  );
};

PostScreen.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default PostScreen;
