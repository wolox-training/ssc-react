import React, { Component } from 'react';
import { arrayOf, func, string, bool } from 'prop-types';

import Square from '../Square';

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

  render() {
    return (
      <div>
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
  disable: bool,
  squares: arrayOf(string),
  onClick: func
};

export default Board;
