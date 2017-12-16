import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

  toggleVotingDisabled = prevState => ({
    ...prevState,
    isVotingDisabled: !prevState.isVotingDisabled,
  });

  upVote = () => {
    this.props.updateScore('upVote');
  }

  render() {
    const { score } = this.props;
    const { isVotingDisabled } = this.state;
    return (
      <div>
        <span>{score}</span>
        <button
          onClick={this.upVote}
          disabled={isVotingDisabled}
        >
          +
        </button>
        <button
          onClick={this.downVote}
          disabled={isVotingDisabled}
        >
          -
        </button>
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
