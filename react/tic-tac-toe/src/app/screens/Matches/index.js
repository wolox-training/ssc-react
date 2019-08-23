import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, bool } from 'prop-types';

import dataActions from '../../../redux/data/actions';
import { matchesPropsTypes } from '../../../constants/propsTypes';
import Navbar from '../../components/Navbar';
import withLoading from '../../components/Loading';

import styles from './styles.module.scss';
import ContainerList from './components/ContainerList';

const ListWithLoading = withLoading(ContainerList);

class Matches extends Component {
  componentDidMount() {
    const { handleGetData } = this.props;
    handleGetData();
  }

  render() {
    const { data, loading } = this.props;
    const playerOneHasWon = data.filter(item => item.winner === 'player_one');
    const playerTwoHasWon = data.filter(item => item.winner === 'player_two');
    const percentOne = playerOneHasWon.length > 0 ? Math.round(100 * playerOneHasWon.length / data.length) : 0;
    const percentTwo = playerTwoHasWon.length > 0 ? Math.round(100 * playerTwoHasWon.length / data.length) : 0;
    return (
      <Fragment>
        <Navbar label="Game" to="/game" />
        <div className={styles.infoContainer}>
          <ul className={styles.listMatches}>
            <ListWithLoading data={data} loading={loading} />
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
  handleGetData: func,
  loading: bool
};

const mapDispatchToProps = dispatch => ({
  handleGetData: () => dispatch(dataActions.getData())
});

const mapStateToProps = state => ({
  data: state.game.data,
  loading: state.game.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
