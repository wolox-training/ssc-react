import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, bool } from 'prop-types';

import { CustomInput } from '../customInput';
import { validMail, minLength, required } from '../../../../../utils/validation';

import styles from './styles.module.scss';

function RegisterForm({ handleSubmit, submitting }) {
  return (
    <form onSubmit={handleSubmit} className={styles.containerForm}>
      <Field
        name="email"
        component={CustomInput}
        type="text"
        label="e-mail"
        validate={[required, validMail]}
      />
      <Field
        name="password"
        component={CustomInput}
        type="text"
        label="password"
        validate={[required, minLength]}
      />
      <div className={styles.separator} />
      <button type="submit" disabled={submitting} className={styles.buttonLogin}>Submit</button>
    </form>
  );
}

RegisterForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool
};

export default reduxForm()(RegisterForm);
