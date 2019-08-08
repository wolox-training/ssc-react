import React from 'react';

import styles from './styles.module.scss';

function renderList(item) {
  return (
    <li key={item.id} className={styles.itemInfo}>
      <p>{item.player_one} - </p>
      <p>{item.player_two} - </p>
      <p>{item.winner}</p>
    </li>
  );
}

export default renderList;
