import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postsOperations } from 'state/ducks/posts';
import { Comments, Header, Post, Spinner } from 'views/components';

const mapStateToProps = ({
  posts: {
    postDetails, postDetailsFetched, isLoadingDetails, loadDetailsHasFailed,
  },
}) => ({
  postDetails,
  postDetailsFetched,
  isLoadingDetails,
  loadDetailsHasFailed,
});

const mapDispatchToProps = dispatch => ({
  fetchPostDetails: id => dispatch(postsOperations.fetchPostDetails(id)),
});

class PostScreen extends Component {
  async componentDidMount() {
    const { fetchPostDetails, match } = this.props;
    const { postId } = match.params;
    fetchPostDetails(postId);
  }

  render() {
    const {
      isLoadingDetails,
      loadDetailsHasFailed,
      match,
      postDetails,
      postDetailsFetched,
    } = this.props;

    const { postId } = match.params;

    let main;

    if (postDetailsFetched) {
      const emptyDetails = Object.keys(postDetails).length === 0;
      if (emptyDetails) {
        main = <Redirect to="/pageNotFound" />;
      } else {
        main = (
          <div className="PostWrapper">
            <Post
              isLoadingDetails={isLoadingDetails}
              loadDetailsHasFailed={loadDetailsHasFailed}
              postDetails={postDetails}
              postId={postId}
            />
            <Comments postId={postId} />
            <style jsx>
              {`
                .PostWrapper {
                  display: flex;
                  flex-direction: column;
                  width: 100vw;
                }
              `}
            </style>
          </div>
        );
      }
    } else if (loadDetailsHasFailed) {
      main = <Redirect to="/pageNotFound" />;
    } else {
      main = <Spinner />;
    }

    return (
      <div className="Screen PostScreen">
        <Header />
        {main}
      </div>
    );
  }
}

PostScreen.defaultProps = {
  isLoadingDetails: false,
  loadDetailsHasFailed: false,
  postDetails: {},
  postDetailsFetched: false,
};

PostScreen.propTypes = {
  fetchPostDetails: PropTypes.func.isRequired,
  isLoadingDetails: PropTypes.bool,
  loadDetailsHasFailed: PropTypes.bool,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
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
  postDetailsFetched: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
