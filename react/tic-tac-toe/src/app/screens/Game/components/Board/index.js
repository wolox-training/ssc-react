import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Square from '../Square';
import players from '../../../../../constants/player';
import dataActions from '../../../../../redux/data/actions';

import styles from './styles.module.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleSquare = i => () => {
    const { squares, xIsNext } = this.state;
    const { handleCreateMatch } = this.props;
    squares.slice();
    squares[i] = xIsNext ? 'X' : 'O';
    if (this.calculateWinner(squares)) {
      const token = localStorage.getItem('token');
      let winner = 'Tie';
      if (this.calculateWinner(squares) === 'X') {
        winner = players.playerOne;
      } else if (this.calculateWinner(squares) === 'O') {
        winner = players.playerTwo;
      } else {
        winner = 'tie';
      }
      const values = {
        [players.playerOne]: 'Tac',
        [players.playerTwo]: 'Toe',
        winner
      };
      handleCreateMatch(values, token);
    }
    this.setState({ squares, xIsNext: !xIsNext });
  };

  renderSquare(i) {
    const { squares } = this.state;
    return (
      <Square
        value={this.state.squares[i]}
        onClick={this.handleSquare(i)}
        disable={!!this.calculateWinner(squares)}
      />
    );
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      } else if (!squares.includes(null)) {
        return 'Tie';
      }
    }
    return null;
  }

  render() {
    const { xIsNext, squares } = this.state;
    const winner = this.calculateWinner(squares);
    const status = winner
      ? `Winner:${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;
    return (
      <div>
        <div className={styles.status}>{status}</div>
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
      </div>
    );
  }
}

Board.propTypes = {
  handleCreateMatch: func
};

const mapDispatchToProps = dispatch => ({
  handleCreateMatch: (values, token) => dispatch(dataActions.createData(values, token))
});

export default connect(null, mapDispatchToProps)(Board);
