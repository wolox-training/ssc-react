import React, { Component, Fragment } from 'react';
import { arrayOf, func, string } from 'prop-types';
import { connect } from 'react-redux';

import MatchesService from '../../../../../services/MatchesService';
import { PLAYERS, NAME } from '../../../../../constants/player';
import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  renderSquare(i) {
    const { squares, onClick, winner } = this.props;
    return (
      <Square
        value={squares[i]}
        onClick={onClick(i)}
        disable={!!winner}
      />
    );
  }

  createNewMatch = winner => {
    const { handleCreateMatch } = this.props;
    const winnerForSend = PLAYERS[winner];
    const values = {
      [PLAYERS.playerOne]: NAME.PLAYER_ONE,
      [PLAYERS.playerTwo]: NAME.PLAYER_TWO,
      winner: winnerForSend
    };
    handleCreateMatch(values);
  }

  render() {
    const { winner } = this.props;
    if (winner) {
      this.createNewMatch(winner);
    }
    return (
      <Fragment>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  handleCreateMatch: func,
  squares: arrayOf(string),
  winner: string,
  onClick: func
};

const mapDispatchToProps = dispatch => ({
  handleCreateMatch: (values) => dispatch(MatchesService.createMatches(values))
});

export default connect(null, mapDispatchToProps)(Board);
