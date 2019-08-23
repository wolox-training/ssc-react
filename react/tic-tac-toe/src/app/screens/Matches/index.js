import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func } from 'prop-types';

import dataActions from '../../../redux/data/actions';
import { matchesPropsTypes } from '../../../constants/propsTypes';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';
import MatchesList from './components/MatchesList';

class Matches extends Component {
  componentDidMount() {
    const { handleGetData } = this.props;
    handleGetData();
  }

  render() {
    const { data } = this.props;
    const playerOne = data.filter(item => item.winner === 'player_one');
    const playerTwo = data.filter(item => item.winner === 'player_two');
    const percentOne = Math.round(100 * playerOne.length / data.length);
    const percentTwo = Math.round(100 * playerTwo.length / data.length);
    return (
      <Fragment>
        <Navbar handleLogout={this.logOut} />
        <div className={styles.infoContainer}>
          <ul className={styles.listMatches}>
            <li className={styles.itemInfo}>
              <p className={styles.textInfo}>Player #1</p>
              <p className={styles.textInfo}>Player #2</p>
              <p className={styles.textInfo}>Winner</p>
            </li>
            { data.map(MatchesList) }
          </ul>
          <div className={styles.percentContainer}>
            <h1 className={styles.winnerOne}>{`Player One has won: ${percentOne}%`}</h1>
            <h1 className={styles.winnerTwo}>{`Player Two has won: ${percentTwo}%`}</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

Matches.propTypes = {
  data: arrayOf(matchesPropsTypes),
  handleGetData: func
};

const mapDispatchToProps = dispatch => ({
  handleGetData: () => dispatch(dataActions.getData())
});

const mapStateToProps = state => ({
  data: state.game.data,
  loading: state.game.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
