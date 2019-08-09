import React, { Component } from 'react';
import Spinner from 'react-spinkit';

import getMatches from '../../../services/MatchesService';

import Matches from './components/Matches';
import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    matches: [],
    loading: true
  };

  componentDidMount() {
    setTimeout(() => getMatches.getMatches().then(response => {
      this.getData(response.data);
    }), 500);
  }

  getData = (matches) => this.setState({ matches, loading: false })

  render() {
    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board />
        </div>
        <div className={styles.gameInfo}>
          {
            this.state.loading
              ? <Spinner name="circle" fadeIn="none" />
              : <ol className={styles.infoContainer}>{this.state.matches.map(Matches)}</ol>
          }
        </div>
      </div>
    );
  }
}

export default Game;
