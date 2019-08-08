import React from 'react';

import players from '../../../../../constants/player';

import styles from './styles.module.scss';

function renderList(item) {
  return (
    <li key={item.id} className={styles.itemInfo}>
      <p>{item[players.playerOne]} - </p>
      <p>{item[players.playerTwo]} - </p>
      <p>{item.winner}</p>
    </li>
  );
}

export default renderList;
