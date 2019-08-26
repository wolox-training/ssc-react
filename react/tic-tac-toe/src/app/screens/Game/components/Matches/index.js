import React from 'react';

import players from '../../../../../constants/player';

import styles from './styles.module.scss';

function renderList(item) {
  return (
    <li key={item.id} className={styles.itemInfo}>
      <p className={styles.textInfo}>{item[players.playerOne]}</p>
      <p className={styles.textInfo}>{item[players.playerTwo]}</p>
      <p className={styles.textInfo}>{item.winner}</p>
    </li>
  );
}

export default renderList;
