import React, { Fragment } from 'react';
import { arrayOf } from 'prop-types';

import players from '../../../../../constants/player';
import { matchesPropsTypes } from '../../../../../constants/propsTypes';
import withLoading from '../../../../components/Loading';

import styles from './styles.module.scss';

function Layout({ data }) {
  return (
    <Fragment>
      <li className={styles.itemInfo}>
        <p className={styles.textInfo}>Player #1</p>
        <p className={styles.textInfo}>Player #2</p>
        <p className={styles.textInfo}>Winner</p>
      </li>
      {
        data.map(item => (
          <li key={item.id} className={styles.itemInfo}>
            <p className={styles.textInfo}>{item[players.playerOne]}</p>
            <p className={styles.textInfo}>{item[players.playerTwo]}</p>
            <p className={styles.textInfo}>{item.winner}</p>
          </li>
        ))
      }
    </Fragment>
  );
}

Layout.propTypes = {
  data: arrayOf(matchesPropsTypes)
};

export default withLoading(Layout);
