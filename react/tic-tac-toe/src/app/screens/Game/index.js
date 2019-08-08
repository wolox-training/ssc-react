import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { arrayOf, func, bool } from 'prop-types';

import { matchesPropsTypes } from '../../../constants/propsTypes';
import dataActions from '../../../redux/data/actions';

import Matches from './components/Matches';
import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  componentDidMount() {
    const { handleGetData } = this.props;
    handleGetData();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board />
        </div>
        <div className={styles.gameInfo}>
          {
            loading
              ? <Spinner name="circle" fadeIn="none" />
              : <ol className={styles.infoContainer}>{ data.map(Matches) }</ol>
          }
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  data: arrayOf(matchesPropsTypes).isRequired,
  handleGetData: func.isRequired,
  loading: bool
};

const mapDispatchToProps = dispatch => ({
  handleGetData: () => dispatch(dataActions.getData())
});

const mapStateToProps = state => ({
  data: state.game.data,
  loading: state.game.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
