import React, { Component } from 'react';

import { PLAYER_TYPE } from '../../../constants/player';

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
    const winner = this.calculateWinner(squares);
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !xIsNext,
      stepNumber: history.length,
      winner
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
        return PLAYER_TYPE.TIE;
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
