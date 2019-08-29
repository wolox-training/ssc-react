import React, { Component } from 'react';

import { PLAYER_TYPE } from '../../../constants/player';
import { calculateWinner } from '../../../utils/calculateWinner';

import Board from './components/Board';
import styles from './styles.module.scss';


class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0,
    winner: null
  }

  handleClick = (i) => () => {
    const { xIsNext, stepNumber, history } = this.state;
    const current = history.slice(0, stepNumber + 1)[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i]) {
      return;
    }
    squares[i] = xIsNext ? PLAYER_TYPE.X : PLAYER_TYPE.O;
    const winner = calculateWinner(squares);
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !xIsNext,
      stepNumber: history.length,
      winner
    });
  }

  jumpTo = step => () => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const { xIsNext, history, stepNumber, winner } = this.state;
    const current = history[stepNumber];
    const status = winner ? `Winner:${winner}` : `Next player: ${xIsNext ? PLAYER_TYPE.X : PLAYER_TYPE.O}`;
    const moves = history.map((i, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={desc} className={styles.itemHistory}>
          <button type="button" onClick={this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={this.handleClick}
            winner={winner}
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

export default Game;
