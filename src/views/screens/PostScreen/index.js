import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postsOperations } from 'state/ducks/posts';
import { Comments, Header, Post } from 'views/components';

const mapStateToProps = ({
  posts: {
    postDetails, isLoadingDetails, loadDetailsHasFailed,
  },
}) => ({
  postInfo: {
    postDetails,
    isLoadingDetails,
    loadDetailsHasFailed,
  },
});

const mapDispatchToProps = dispatch => ({
  fetchPostDetails: id => dispatch(postsOperations.fetchPostDetails(id)),
});

class PostScreen extends Component {
  componentDidMount() {
    const { fetchPostDetails, match } = this.props;
    const { postId } = match.params;
    fetchPostDetails(postId);
  }

  render() {
    const {
      match,
      postInfo,
    } = this.props;

    const {
      category,
      postId,
    } = match.params;
    const {
      isLoadingDetails,
      loadDetailsHasFailed,
      postDetails,
    } = postInfo;

    const postNotFound = loadDetailsHasFailed && Object.keys(postDetails).length === 0;

    let comments;

    if (!isLoadingDetails && !loadDetailsHasFailed) {
      comments = <Comments postId={postId} />;
    }

    return (
      postNotFound
        ?
          <Redirect to={`/${category}`} />
        :
          <div className="Screen PostScreen">
            <Header />
            <Post
              postId={postId}
              {...postInfo}
            />
            {comments}
            {/* <style jsx>{}</style> */}
          </div>
    );
  }
}

PostScreen.defaultProps = {
  postInfo: {},
};

PostScreen.propTypes = {
  fetchPostDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  postInfo: PropTypes.shape({
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
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
