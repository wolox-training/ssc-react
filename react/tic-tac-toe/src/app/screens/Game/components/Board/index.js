import React, { Component, Fragment } from 'react';
import { arrayOf, func, string, bool } from 'prop-types';
import { connect } from 'react-redux';

import Square from '../Square';
import dataActions from '../../../../../redux/data/actions';
import players from '../../../../../constants/player';

import styles from './styles.module.scss';

class Board extends Component {
  renderSquare(i) {
    const { squares, onClick, disable } = this.props;
    return (
      <Square
        value={squares[i]}
        onClick={onClick(i)}
        disable={disable}
      />
    );
  }

  handleCreateMatch = (winner) => {
    const { handleCreateMatch } = this.props;
    let valueWinner = '';
    if (winner === players.tie) {
      valueWinner = players.tie;
    } else if (winner === players.x) {
      valueWinner = players.playerOne;
    } else if (winner === players.o) {
      valueWinner = players.playerTwo;
    }
    const values = {
      [players.playerOne]: players.names.p1,
      [players.playerTwo]: players.names.p2,
      winner: valueWinner
    };
    handleCreateMatch(values);
  }

  render() {
    const { winner } = this.props;
    if (winner) {
      this.handleCreateMatch(winner);
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
  disable: bool,
  handleCreateMatch: func,
  squares: arrayOf(string),
  winner: string,
  onClick: func
};

const mapDispatchToProps = dispatch => ({
  handleCreateMatch: (values) => dispatch(dataActions.createData(values))
});

export default connect(null, mapDispatchToProps)(Board);
