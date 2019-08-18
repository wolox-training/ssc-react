import React from 'react';
import { string, func, bool } from 'prop-types';

import styles from './styles.module.scss';

function Square(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={styles.square}
      disabled={props.disable}
    >
      {props.value}
    </button>
  );
}

Square.propTypes = {
  disable: bool,
  value: string,
  onClick: func
};

export default Square;
