import React, { Component } from 'react';
import PropTypes from 'prop-types';


class VoteScore extends Component {
  state = {
    votingDisabled: false,
  }

  componentWillReceiveProps(nextProps) {
    const {
      voteState: {
        isUpdatingScore,
        updateScoreHasFailed,
      },
    } = this.props;

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
    const isUpdatingScoreChanged = isUpdatingScore !== nextProps.isUpdatingScore;
    const updateScoreEnd = isUpdatingScoreChanged && !nextProps.isUpdatingScore;

    if (isUpdatingScoreChanged) {
      this.setState(this.toggleVotingDisabled);
    }
    if (isUpdatingScoreChanged) {
      if (updateScoreEnd) {
        if (nextProps.updateScoreHasFailed) {
          /* The voteScore update failed */
          this.setState({
            errorMessage: 'There was an error updating the comment score',
          });
        }
        /* The voteScore was updated succesfully */
      }
    }
  }

  downVote = () => this.props.updateScore('downVote');
  upvote = () => this.props.updateScore('upVote');
  render() {
    const { score } = this.props;
    return (
      <div>
        <span>{score}</span>
        <button onClick={this.upVote}>+</button>
        <button onClick={this.downVote}>-</button>
      </div>
    );
  }
}

VoteScore.propTypes = {
  updateScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  voteState: PropTypes.shape({
    isUpdatingScore: PropTypes.bool,
    updateScoreHasFailed: PropTypes.bool,
  }).isRequired,
};

export default VoteScore;
