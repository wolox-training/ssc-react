import React, { Component, Fragment } from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { arrayOf, func, bool } from 'prop-types';

import { matchesPropsTypes } from '../../../constants/propsTypes';
import dataActions from '../../../redux/data/actions';
import loginActions from '../../../redux/login/actions';

import Matches from './components/Matches';
import styles from './styles.module.scss';
import Board from './components/Board';
import Navbar from './components/Navbar';

class Game extends Component {
  componentDidMount() {
    const { handleGetData } = this.props;
    handleGetData();
  }

  logOut = () => {
    const { handleLogout } = this.props;
    handleLogout();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <div className={styles.game}>
        <Navbar handleLogout={this.logOut} />
        <div className={styles.gameBoard}>
          <Board />
        </div>
        <div className={styles.gameInfo}>
          {
            loading
              ? <Spinner name="circle" fadeIn="none" />
              : (
                <Fragment>
                  <h1 className={styles.titleInfo}>Matches</h1>
                  <ol className={styles.infoContainer}>{ data.map(Matches) }</ol>
                </Fragment>
              )
          }
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  data: arrayOf(matchesPropsTypes).isRequired,
  handleGetData: func,
  handleLogout: func,
  loading: bool
};

const mapDispatchToProps = dispatch => ({
  handleGetData: () => dispatch(dataActions.getData()),
  handleLogout: () => dispatch(loginActions.logOut())
});

const mapStateToProps = state => ({
  data: state.game.data,
  loading: state.game.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
