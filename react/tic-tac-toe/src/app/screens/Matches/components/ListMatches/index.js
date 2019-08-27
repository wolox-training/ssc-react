import React from 'react';

import { PLAYERS } from '../../../../../constants/player';
import { matchesPropsTypes } from '../../../../../constants/propsTypes';

import styles from './styles.module.scss';

function ListMatches({ item }) {
  return (
    <li key={item.id} className={styles.itemInfo}>
      <p className={styles.textInfo}>{item[PLAYERS.playerOne]}</p>
      <p className={styles.textInfo}>{item[PLAYERS.playerTwo]}</p>
      <p className={styles.textInfo}>{item.winner}</p>
    </li>
  );
}

ListMatches.propTypes = {
  item: matchesPropsTypes
};

export default ListMatches;
