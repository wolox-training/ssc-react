import React, { Fragment } from 'react';
import { arrayOf } from 'prop-types';

import MatchesList from '../MatchesList';
import { matchesPropsTypes } from '../../../../../constants/propsTypes';

import styles from './styles.module.scss';

function ContainerList({ data }) {
  return (
    <Fragment>
      <li className={styles.itemInfo}>
        <p className={styles.textInfo}>Player #1</p>
        <p className={styles.textInfo}>Player #2</p>
        <p className={styles.textInfo}>Winner</p>
      </li>
      { data.map(MatchesList) }
    </Fragment>
  );
}

ContainerList.propTypes = {
  data: arrayOf(matchesPropsTypes)
};

export default ContainerList;
