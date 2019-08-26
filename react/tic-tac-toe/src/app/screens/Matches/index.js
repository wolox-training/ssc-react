import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, bool } from 'prop-types';

import dataActions from '../../../redux/data/actions';
import { matchesPropsTypes } from '../../../constants/propsTypes';
import calculatePercent from '../../../utils/calcultePercent';

import styles from './styles.module.scss';
import Layout from './components/Layout';

class Matches extends Component {
  componentDidMount() {
    const { handleGetData } = this.props;
    handleGetData();
  }

  render() {
    const { data, loading } = this.props;
    const { percentOne, percentTwo } = calculatePercent(data);
    return (
      <div className={styles.infoContainer}>
        <ul className={styles.listMatches}>
          <Layout data={data} loading={loading} />
        </ul>
        <div className={styles.percentContainer}>
          <h1 className={styles.winnerOne}>{`Player One has won: ${percentOne}%`}</h1>
          <h1 className={styles.winnerTwo}>{`Player Two has won: ${percentTwo}%`}</h1>
        </div>
      </div>
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
