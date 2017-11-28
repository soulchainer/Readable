import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostEditor extends Component {
  componentDidMount() {
    const { location: { state: postInfo } } = this.props;
    console.log(postInfo); // eslint-disable-line
    console.log(location); // eslint-disable-line
  }

  render() {
    return (
      <span>Hello, PostEditor</span>
    );
  }
}

PostEditor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default PostEditor;
