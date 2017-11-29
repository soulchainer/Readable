import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostEditor extends Component {
  componentDidMount() {
    const { postInfo } = this.props;
    console.log(postInfo); // eslint-disable-line
  }

  render() {
    return (
      <span>Hello, PostEditor</span>
    );
  }
}

PostEditor.defaultProps = {
  postInfo: {},
};

PostEditor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  postInfo: PropTypes.object,
};

export default PostEditor;
