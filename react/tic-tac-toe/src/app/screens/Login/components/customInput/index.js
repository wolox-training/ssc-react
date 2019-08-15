import React, { Fragment } from 'react';

import styles from './styles.module.scss';

export const CustomInput = props => {
  const { input, type, label, meta } = props;
  return (
    <Fragment>
      <label className={styles.labels}>{label}</label>
      <input {...input} type={type} className={styles.inputs} />
      <div className={styles.inputValidate}>{
        meta.error && meta.touched && meta.error
      }
      </div>
    </Fragment>
  );
};
