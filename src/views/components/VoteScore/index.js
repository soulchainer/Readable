import React, { Component } from 'react';
import PropTypes from 'prop-types';

const iconThumbDown = (
  <svg
    className="icon"
    viewBox="0 0 48 48"
  >
    <title>Downvote</title>
    <path d="M46 7.8C45.6 4.4 42.8 2 39.4 2h-28c-3 0-5.4 2.2-6 5L2.6 25c-.4 3.2 1.8 6.4 5 6.8H18v6c0 4.4 3.6 8 8 8 .8 0 1.6-.4 1.8-1.2l7.4-16.8h4c3.4 0 6.2-2.4 6.6-5.8V8c.2 0 .2-.2.2-.2zM32 25.6l-7.2 16.2c-1.6-.6-2.8-2-2.8-3.8v-8c0-1.2-.8-2-2-2H8.6h-.4c-1-.2-1.8-1.2-1.6-2.2l2.8-18c.2-1 1-1.8 2-1.8H32v19.6zm10-3.8c-.2 1.2-1.4 2.2-2.6 2.2H36V6h3.4c1.2-.2 2.4.8 2.6 2.2v13.6z" />
  </svg>
);

const iconThumbUp = (
  <svg
    className="icon"
    viewBox="0 0 48 48"
  >
    <title>Upvote</title>
    <path d="M44.2 18.4c-1-1.2-2.4-2.2-4-2.4H30v-6c0-4.4-3.6-8-8-8-.8 0-1.6.4-1.8 1.2L12.8 20H8c-3.4 0-6 2.6-6 6v14c0 3.4 2.6 6 6 6h28.6c3 0 5.4-2.2 6-5l2.8-18c.2-1.6-.2-3.2-1.2-4.6zM12 42H8c-1.2 0-2-.8-2-2V26c0-1.2.8-2 2-2h4v18zm26.6-1.6c-.2 1-1 1.6-2 1.6H16V22.4l7.2-16.2c1.6.6 2.8 2 2.8 3.8v8c0 1.2.8 2 2 2h11.8c.6 0 1 .4 1.4.8s.4 1 .4 1.4l-3 18.2z" />
  </svg>
);

class VoteScore extends Component {
  state = {
    isVotingDisabled: false,
  };

  componentWillReceiveProps({
    voteState: {
      isUpdatingScore: nextIsUpdatingScore,
      updateScoreHasFailed,
    },
  }) {
    const { voteState: { isUpdatingScore } } = this.props;

    /**
     * TODO: Add conditions to disable/enable buttons if `isUpdatingScore` and
     * show error messages/console messages if some problem occured.
     * Also apply this component to posts. Add an state for disable the buttons.
     */

    /**
     * TODO: Improve this. Add a loading message, maybe with a spinner,
     * notifying there is an edit/new comment addition in progress, via console?
     * Define the `toggleVotingDisabled` function.
     */
    const isUpdatingScoreChanged = isUpdatingScore !== nextIsUpdatingScore;

    if (isUpdatingScoreChanged) {
      this.setState(this.toggleVotingDisabled);
    }
    if (updateScoreHasFailed) {
      // eslint-disable-next-line
      console.error('There was an error updating the comment score');
    }
  }

  downVote = () => {
    this.props.updateScore('downVote');
  }

  downVoteOnKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.downVote();
    }
  }

  toggleVotingDisabled = prevState => ({
    ...prevState,
    isVotingDisabled: !prevState.isVotingDisabled,
  });

  upVote = () => {
    this.props.updateScore('upVote');
  }

  upVoteOnKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.upVote();
    }
  }

  render() {
    const { score } = this.props;
    const { isVotingDisabled } = this.state;
    return (
      <div className="VoteScore">
        <span className="VoteScore-score">{score}</span>
        <span
          onClick={this.upVote}
          onKeyUp={this.upVoteOnKeyUp}
          aria-label="Upvote"
          className="iconButton"
          disabled={isVotingDisabled}
          role="button"
          tabIndex="0"
        >
          {iconThumbUp}
        </span>
        <span
          onClick={this.downVote}
          onKeyUp={this.downVoteOnKeyUp}
          aria-label="Downvote"
          className="iconButton"
          disabled={isVotingDisabled}
          role="button"
          tabIndex="0"
        >
          {iconThumbDown}
        </span>
        <style jsx>
          {`
            .VoteScore {
              align-items: center;
              display: flex;
              flex-wrap: wrap;
              padding-right: 0.5rem;
            }

            .VoteScore-score {
              color: #d23282;
              font-weight: 700;
            }

            .iconButton {
              cursor: pointer;
              display: inline-block;
              padding: 0.5rem;
              word-break: break-all;
            }

            .iconButton::-moz-focus-inner {
              padding: 0;
            }

            .iconButton > :global(.icon) {
              pointer-events: all;
              width: 1.2rem;
            }
    
            .iconButton:active > :global(.icon),
            .iconButton:focus > :global(.icon),
            .iconButton:hover > :global(.icon) {
              color: #01a4d2;
            }
    
            path {
              pointer-events: all;
            }
    
            .iconButton:active > :global(.icon > path),
            .iconButton:focus > :global(.icon > path),
            .iconButton:hover > :global(.icon > path) {
              fill: #01a4d2;
            }
          `}
        </style>
      </div>
    );
  }
}

VoteScore.defaultProps = {
  score: 0,
};

VoteScore.propTypes = {
  updateScore: PropTypes.func.isRequired,
  score: PropTypes.number,
  voteState: PropTypes.shape({
    isUpdatingScore: PropTypes.bool,
    updateScoreHasFailed: PropTypes.bool,
  }).isRequired,
};

export default VoteScore;
