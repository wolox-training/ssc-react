import React from 'react';
import { string, func, bool } from 'prop-types';

import styles from './styles.module.scss';

function Square(props) {
  const { onClick, disable, value } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.square}
      disabled={disable}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  disable: bool,
  value: string,
  onClick: func
};

export default Square;
