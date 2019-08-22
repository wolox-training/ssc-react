import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import dataActions from '../../../redux/data/actions';
import loginActions from '../../../redux/login/actions';
import players from '../../../constants/player';

import styles from './styles.module.scss';
import Board from './components/Board';
import Navbar from './components/Navbar';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0
  }

  logOut = () => {
    const { handleLogout } = this.props;
    handleLogout();
  }

  handleClick = i => () => {
    const { xIsNext, stepNumber, history } = this.state;
    const { handleCreateMatch } = this.props;
    const current = history.slice(0, stepNumber + 1)[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    if (this.calculateWinner(squares)) {
      let winner = '';
      if (this.calculateWinner(squares) === 'Tie') {
        winner = 'Tie';
      } else if (this.calculateWinner(squares) === 'X') {
        winner = 'player_one';
      } else if (this.calculateWinner(squares) === 'O') {
        winner = 'player_two';
      }
      const values = {
        [players.playerOne]: 'Tic',
        [players.playerTwo]: 'Tac',
        winner
      };
      handleCreateMatch(values);
    }
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !xIsNext,
      stepNumber: history.length
    });
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

  jumpTo = step => () => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const { xIsNext, history, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = this.calculateWinner(current.squares);
    const status = winner ? `Winner:${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
    const moves = history.map((i, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move} className={styles.itemHistory}>
          <button type="button" onClick={this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return (
      <div className={styles.game}>
        <Navbar handleLogout={this.logOut} />
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={this.handleClick}
            disable={!!this.calculateWinner(current.squares)}
          />
        </div>
        <div className={styles.gameInfo}>
          <h2 className={styles.status}>{status}</h2>
          <ol className={styles.infoContainer}>{ moves }</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  handleCreateMatch: func,
  handleLogout: func
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(loginActions.logOut()),
  handleCreateMatch: (values) => dispatch(dataActions.createData(values))
});

export default connect(null, mapDispatchToProps)(Game);
