import React, { Component } from 'react';
import PropTypes from 'prop-types';


class VoteScore extends Component {
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
