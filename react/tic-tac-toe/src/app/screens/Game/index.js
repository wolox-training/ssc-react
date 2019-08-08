import React, { Component } from 'react';
import Spinner from 'react-spinkit';

import getMatches from '../../../services/MatchesService';

import styles from './styles.module.scss';
import Board from './components/Board';


class Game extends Component {
  state = {
    matches: [],
    loading: true
  }

  componentDidMount() {
    setTimeout(() => getMatches.getMatches().then(response => {
      this.getData(response.data);
    }), 800);
  }

  getData = (matches) => this.setState({ matches, loading: false })

  renderList = item => (
    <li key={item.id} className={styles.itemInfo}>
      <p>{item.player_one} - </p>
      <p>{item.player_two} - </p>
      <p>{item.winner}</p>
    </li>
  )

  render() {
    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board />
        </div>
        <div className={styles.gameInfo}>
          {
            this.state.loading
              ? <Spinner className={styles} name="circle" fadeIn="none" />
              : <ol className={styles.infoContainer}>{this.state.matches.map(this.renderList)}</ol>
          }
        </div>
      </div>
    );
  }
}

export default Game;
